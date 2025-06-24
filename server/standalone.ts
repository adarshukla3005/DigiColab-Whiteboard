import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";
import { v4 } from "uuid";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect";
import Room from "./models/Room";
import User from "./models/User";
import Session from "./models/Session";

// Load environment variables
dotenv.config();

// Enable mongoose debugging in development mode
if (process.env.NODE_ENV !== "production") {
  const mongoose = require('mongoose');
  mongoose.set('debug', true);
  console.log('MongoDB debug mode enabled');
}

const port = parseInt(process.env.PORT || "8000", 10);

// Function to start the server
const startServer = async () => {
  // Connect to MongoDB
  try {
    await connectDB();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }

  const app = express();
  
  // Enable CORS
  app.use(cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST"],
    credentials: true
  }));
  
  const server = createServer(app);

  // Configure Socket.IO
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL || "*",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  // Health check endpoint
  app.get("/health", async (_, res) => {
    res.send("Healthy");
  });
  
  // API endpoint to get room info
  app.get("/api/rooms/:roomId", async (req, res) => {
    try {
      const { roomId } = req.params;
      const room = await Room.findOne({ roomId });
      
      if (!room) {
        return res.status(404).json({ error: "Room not found" });
      }
      
      const users = await User.find({ roomId });
      const session = await Session.findOne({ roomId, isActive: true });
      
      return res.status(200).json({
        room,
        users,
        session
      });
    } catch (error) {
      console.error("Error fetching room data:", error);
      return res.status(500).json({ error: "Failed to fetch room data" });
    }
  });

  // In-memory cache for active rooms
  const rooms = new Map<string, any>();

  const addMove = async (roomId: string, socketId: string, move: any) => {
    const room = rooms.get(roomId)!;

    if (!room.users.has(socketId)) {
      room.usersMoves.set(socketId, [move]);
    }

    room.usersMoves.get(socketId)!.push(move);

    // Update user's moves in MongoDB
    try {
      console.log(`Saving move for user ${socketId} in room ${roomId}`);
      const updateResult = await User.updateOne(
        { socketId },
        { $push: { moves: move }, $set: { lastActive: new Date() } }
      );
      console.log(`MongoDB update result: ${JSON.stringify(updateResult)}`);
    } catch (error) {
      console.error("Error updating user moves:", error);
    }
  };

  const undoMove = async (roomId: string, socketId: string) => {
    const room = rooms.get(roomId)!;

    room.usersMoves.get(socketId)!.pop();

    // Update user's moves in MongoDB
    try {
      console.log(`Removing last move for user ${socketId} in room ${roomId}`);
      const updateResult = await User.updateOne(
        { socketId },
        { $pop: { moves: 1 }, $set: { lastActive: new Date() } }
      );
      console.log(`MongoDB update result: ${JSON.stringify(updateResult)}`);
    } catch (error) {
      console.error("Error updating user moves:", error);
    }
  };

  io.on("connection", (socket) => {
    console.log(`New socket connection: ${socket.id}`);
    
    const getRoomId = () => {
      const joinedRoom = [...socket.rooms].find((room) => room !== socket.id);

      if (!joinedRoom) return socket.id;

      return joinedRoom;
    };

    const leaveRoom = async (roomId: string, socketId: string) => {
      const room = rooms.get(roomId);
      if (!room) return;

      const userMoves = room.usersMoves.get(socketId);

      if (userMoves) room.drawed.push(...userMoves);
      room.users.delete(socketId);

      socket.leave(roomId);

      // Update MongoDB
      try {
        console.log(`User ${socketId} leaving room ${roomId}`);
        
        // Update room's drawed array
        const roomUpdateResult = await Room.updateOne(
          { roomId },
          { $push: { drawed: { $each: userMoves || [] } } }
        );
        console.log(`Room update result: ${JSON.stringify(roomUpdateResult)}`);

        // Update session to mark user as left
        const sessionUpdateResult = await Session.updateOne(
          { roomId, isActive: true },
          { $pull: { participants: socketId } }
        );
        console.log(`Session update result: ${JSON.stringify(sessionUpdateResult)}`);

        // If room is empty, mark session as ended
        if (room.users.size === 0) {
          const endSessionResult = await Session.updateOne(
            { roomId, isActive: true },
            { isActive: false, endTime: new Date() }
          );
          console.log(`End session result: ${JSON.stringify(endSessionResult)}`);
        }
      } catch (error) {
        console.error("Error updating database on leave:", error);
      }
    };

    socket.on("create_room", async (username) => {
      let roomId: string;
      do {
        roomId = Math.random().toString(36).substring(2, 6);
      } while (rooms.has(roomId));

      socket.join(roomId);

      rooms.set(roomId, {
        usersMoves: new Map([[socket.id, []]]),
        drawed: [],
        users: new Map([[socket.id, username]]),
      });

      // Create room in MongoDB
      try {
        console.log(`Creating room ${roomId} with user ${socket.id} (${username})`);
        
        // Create room in MongoDB
        const room = await Room.create({ roomId });
        console.log(`Room created: ${room.roomId}`);
        
        // Create user in MongoDB
        const user = await User.create({
          socketId: socket.id,
          username,
          roomId,
        });
        console.log(`User created: ${user.socketId}`);
        
        // Create session in MongoDB
        const session = await Session.create({
          roomId,
          participants: [socket.id],
        });
        console.log(`Session created for room ${roomId}`);
      } catch (error) {
        console.error("Error creating room in database:", error);
      }

      io.to(socket.id).emit("created", roomId);
    });

    socket.on("join_room", async (roomId, username) => {
      try {
        // Check if room exists in MongoDB
        const roomExists = await Room.exists({ roomId });
        
        if (!roomExists) {
          io.to(socket.id).emit("joined", roomId, true);
          return;
        }

        socket.join(roomId);

        // Get or create room in memory
        if (!rooms.has(roomId)) {
          // Room exists in DB but not in memory (server restart?)
          rooms.set(roomId, {
            usersMoves: new Map([[socket.id, []]]),
            drawed: [],
            users: new Map([[socket.id, username]]),
          });
          
          // Load drawed moves from DB
          const roomData = await Room.findOne({ roomId });
          if (roomData && roomData.drawed) {
            rooms.get(roomId).drawed = roomData.drawed;
          }
        } else {
          // Add user to existing room
          rooms.get(roomId).users.set(socket.id, username);
          rooms.get(roomId).usersMoves.set(socket.id, []);
        }

        // Create user in MongoDB
        try {
          const user = await User.create({
            socketId: socket.id,
            username,
            roomId,
          });
          console.log(`User created: ${user.socketId}`);
          
          // Add user to session
          const sessionUpdateResult = await Session.updateOne(
            { roomId, isActive: true },
            { $push: { participants: socket.id } }
          );
          console.log(`Session update result: ${JSON.stringify(sessionUpdateResult)}`);
        } catch (error) {
          console.error("Error creating user in database:", error);
        }

        // Get all users in the room
        const usersMap = rooms.get(roomId).users;
        const users: Record<string, string> = {};
        
        for (const [id, name] of usersMap.entries()) {
          users[id] = name;
        }

        // Notify everyone about the new user
        io.to(roomId).emit("user_joined", socket.id, username);
        
        // Send room data to the new user
        io.to(socket.id).emit("joined", roomId);
        io.to(socket.id).emit("room_users", users);
        io.to(socket.id).emit("drawed", rooms.get(roomId).drawed);
        
        // Send all current users' moves
        for (const [userId, moves] of rooms.get(roomId).usersMoves.entries()) {
          if (moves.length > 0) {
            io.to(socket.id).emit("user_draw", userId, moves);
          }
        }
      } catch (error) {
        console.error("Error joining room:", error);
        io.to(socket.id).emit("error", "Failed to join room");
      }
    });

    socket.on("leave_room", () => {
      const roomId = getRoomId();
      if (roomId === socket.id) return;

      leaveRoom(roomId, socket.id);
      io.to(roomId).emit("user_left", socket.id);
    });

    socket.on("draw", (move) => {
      const roomId = getRoomId();
      
      io.to(roomId).emit("user_draw", socket.id, [move]);
      
      addMove(roomId, socket.id, move);
    });

    socket.on("undo", () => {
      const roomId = getRoomId();
      const room = rooms.get(roomId);
      
      if (!room) return;
      
      const userMoves = room.usersMoves.get(socket.id);
      
      if (!userMoves || userMoves.length === 0) return;
      
      undoMove(roomId, socket.id);
      io.to(roomId).emit("user_undo", socket.id);
    });

    socket.on("clear", () => {
      const roomId = getRoomId();
      const room = rooms.get(roomId);
      
      if (!room) return;
      
      room.drawed = [];
      
      for (const socketId of room.usersMoves.keys()) {
        room.usersMoves.set(socketId, []);
      }
      
      io.to(roomId).emit("cleared");
      
      // Update MongoDB
      try {
        Room.updateOne({ roomId }, { drawed: [] }).exec();
        User.updateMany({ roomId }, { moves: [] }).exec();
      } catch (error) {
        console.error("Error clearing room data:", error);
      }
    });

    socket.on("mouse_move", (x, y) => {
      const roomId = getRoomId();
      socket.to(roomId).emit("mouse_moved", socket.id, x, y);
    });

    socket.on("send_message", async (message) => {
      const roomId = getRoomId();
      if (roomId === socket.id) return;
      
      const room = rooms.get(roomId);
      if (!room) return;
      
      const username = room.users.get(socket.id);
      
      // Send message to all users in the room
      io.to(roomId).emit("new_message", {
        id: v4(),
        userId: socket.id,
        username,
        text: message,
        timestamp: new Date().toISOString(),
      });
      
      // Save message to MongoDB
      try {
        await Session.updateOne(
          { roomId, isActive: true },
          { 
            $push: { 
              messages: {
                userId: socket.id,
                username,
                text: message,
                timestamp: new Date(),
              }
            }
          }
        );
      } catch (error) {
        console.error("Error saving message to database:", error);
      }
    });

    socket.on("disconnect", () => {
      const roomId = getRoomId();
      if (roomId === socket.id) return;

      leaveRoom(roomId, socket.id);
      io.to(roomId).emit("user_left", socket.id);
    });
  });

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

// Start the server
startServer().catch((err) => {
  console.error("Failed to start server:", err);
}); 