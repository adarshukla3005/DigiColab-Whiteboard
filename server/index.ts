import { createServer } from "http";

import {} from "@/common/types/global";

import express from "express";
import next, { NextApiHandler } from "next";
import { Server } from "socket.io";
import { v4 } from "uuid";
import connectDB from "./db/connect";
import Room from "./models/Room";
import User from "./models/User";
import Session from "./models/Session";

// Enable mongoose debugging in development mode
if (process.env.NODE_ENV !== "production") {
  const mongoose = require('mongoose');
  mongoose.set('debug', true);
  console.log('MongoDB debug mode enabled');
}

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  // Connect to MongoDB
  try {
    await connectDB();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }

  const app = express();
  const server = createServer(app);

  const io = new Server<ClientToServerEvents, ServerToClientEvents>(server);

  app.get("/health", async (_, res) => {
    res.send("Healthy");
  });

  // In-memory cache for active rooms
  const rooms = new Map<string, Room>();

  const addMove = async (roomId: string, socketId: string, move: Move) => {
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

    socket.on("check_room", async (roomId) => {
      try {
        console.log(`Checking if room ${roomId} exists`);
        
        // Check in-memory cache first
        if (rooms.has(roomId)) {
          console.log(`Room ${roomId} found in memory`);
          socket.emit("room_exists", true);
          return;
        }
        
        // Check MongoDB if not in memory
        const roomExists = await Room.exists({ roomId, isActive: true });
        console.log(`MongoDB room check result: ${JSON.stringify(roomExists)}`);
        
        if (roomExists) {
          // Load room from MongoDB into memory if it exists
          console.log(`Room ${roomId} found in MongoDB, loading into memory`);
          const roomData = await Room.findOne({ roomId });
          const users = await User.find({ roomId });
          
          // Create in-memory room structure
          const usersMoves = new Map();
          const usersMap = new Map();
          
          users.forEach(user => {
            usersMoves.set(user.socketId, user.moves);
            usersMap.set(user.socketId, user.username);
          });
          
          rooms.set(roomId, {
            usersMoves,
            drawed: roomData?.drawed || [],
            users: usersMap
          });
          
          socket.emit("room_exists", true);
        } else {
          console.log(`Room ${roomId} not found`);
          socket.emit("room_exists", false);
        }
      } catch (error) {
        console.error("Error checking room:", error);
        socket.emit("room_exists", false);
      }
    });

    socket.on("join_room", async (roomId, username) => {
      try {
        console.log(`User ${socket.id} (${username}) attempting to join room ${roomId}`);
        const room = rooms.get(roomId);

        if (room && room.users.size < 12) {
          socket.join(roomId);

          room.users.set(socket.id, username);
          room.usersMoves.set(socket.id, []);

          // Add user to MongoDB
          const user = await User.create({
            socketId: socket.id,
            username,
            roomId,
          });
          console.log(`User created: ${user.socketId}`);
          
          // Update session with new participant
          const sessionUpdate = await Session.updateOne(
            { roomId, isActive: true },
            { $addToSet: { participants: socket.id } }
          );
          console.log(`Session updated: ${JSON.stringify(sessionUpdate)}`);

          io.to(socket.id).emit("joined", roomId);
        } else {
          console.log(`Join failed: Room ${roomId} full or not found`);
          io.to(socket.id).emit("joined", "", true);
        }
      } catch (error) {
        console.error("Error joining room:", error);
        io.to(socket.id).emit("joined", "", true);
      }
    });

    socket.on("joined_room", async () => {
      const roomId = getRoomId();
      console.log(`User ${socket.id} joined room ${roomId}`);

      const room = rooms.get(roomId);
      if (!room) return;

      io.to(socket.id).emit(
        "room",
        room,
        JSON.stringify([...room.usersMoves]),
        JSON.stringify([...room.users])
      );

      socket.broadcast
        .to(roomId)
        .emit("new_user", socket.id, room.users.get(socket.id) || "Anonymous");
    });

    socket.on("leave_room", async () => {
      const roomId = getRoomId();
      console.log(`User ${socket.id} leaving room ${roomId}`);
      await leaveRoom(roomId, socket.id);

      io.to(roomId).emit("user_disconnected", socket.id);
    });

    socket.on("draw", async (move) => {
      const roomId = getRoomId();
      console.log(`User ${socket.id} drawing in room ${roomId}`);

      const timestamp = Date.now();

      // eslint-disable-next-line no-param-reassign
      move.id = v4();

      await addMove(roomId, socket.id, { ...move, timestamp });

      io.to(socket.id).emit("your_move", { ...move, timestamp });

      socket.broadcast
        .to(roomId)
        .emit("user_draw", { ...move, timestamp }, socket.id);
    });

    socket.on("undo", async () => {
      const roomId = getRoomId();
      console.log(`User ${socket.id} undoing in room ${roomId}`);

      await undoMove(roomId, socket.id);

      socket.broadcast.to(roomId).emit("user_undo", socket.id);
    });

    socket.on("mouse_move", (x, y) => {
      socket.broadcast.to(getRoomId()).emit("mouse_moved", x, y, socket.id);
    });

    socket.on("send_msg", async (msg) => {
      const roomId = getRoomId();
      console.log(`User ${socket.id} sending message in room ${roomId}: ${msg}`);
      
      const user = await User.findOne({ socketId: socket.id });
      const username = user ? user.username : "Anonymous";
      
      // Store message in MongoDB
      try {
        const messageUpdate = await Session.updateOne(
          { roomId, isActive: true },
          { 
            $push: { 
              messages: {
                userId: socket.id,
                username,
                message: msg,
                timestamp: new Date()
              } 
            } 
          }
        );
        console.log(`Message stored: ${JSON.stringify(messageUpdate)}`);
      } catch (error) {
        console.error("Error storing message:", error);
      }
      
      io.to(roomId).emit("new_msg", socket.id, msg);
    });

    socket.on("disconnecting", async () => {
      const roomId = getRoomId();
      console.log(`User ${socket.id} disconnecting from room ${roomId}`);
      await leaveRoom(roomId, socket.id);

      io.to(roomId).emit("user_disconnected", socket.id);
    });
  });

  app.all("*", (req: any, res: any) => nextHandler(req, res));

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
