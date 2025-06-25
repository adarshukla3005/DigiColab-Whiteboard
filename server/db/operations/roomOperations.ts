import RoomModel from '../models/Room';
import mongoose from 'mongoose';

interface IMoveData {
  id: string;
  timestamp: number;
  options: any;
  [key: string]: any;
}

// Create a new room
export const createRoom = async (
  roomId: string, 
  creatorId: string, 
  creatorName: string
): Promise<any> => {
  try {
    const room = new RoomModel({
      roomId,
      users: new Map([[creatorId, creatorName]]),
      usersMoves: {},
      drawed: []
    });
    
    // Initialize usersMoves as empty array for the creator
    room.usersMoves[creatorId] = [];
    
    await room.save();
    return room;
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
};

// Get room by ID
export const getRoom = async (roomId: string): Promise<any> => {
  try {
    const room = await RoomModel.findOne({ roomId });
    return room;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
};

// Update room data
export const updateRoom = async (roomId: string, updateData: any): Promise<any> => {
  try {
    const room = await RoomModel.findOneAndUpdate(
      { roomId },
      { $set: updateData },
      { new: true }
    );
    return room;
  } catch (error) {
    console.error('Error updating room:', error);
    throw error;
  }
};

// Add a move to a user in a room
export const addMove = async (roomId: string, userId: string, move: IMoveData): Promise<any> => {
  try {
    const room = await RoomModel.findOne({ roomId });
    
    if (!room) {
      throw new Error('Room not found');
    }
    
    // Initialize usersMoves for this user if it doesn't exist
    if (!room.usersMoves[userId]) {
      room.usersMoves[userId] = [];
    }
    
    // Add the move
    room.usersMoves[userId].push(move);
    
    await room.save();
    return room;
  } catch (error) {
    console.error('Error adding move:', error);
    throw error;
  }
};

// Remove the last move from a user in a room (undo)
export const removeLastMove = async (roomId: string, userId: string): Promise<any> => {
  try {
    const room = await RoomModel.findOne({ roomId });
    
    if (!room || !room.usersMoves[userId] || room.usersMoves[userId].length === 0) {
      return null;
    }
    
    // Pop the last move
    room.usersMoves[userId].pop();
    
    await room.save();
    return room;
  } catch (error) {
    console.error('Error removing move:', error);
    throw error;
  }
};

// Mark a room as inactive/deleted
export const deactivateRoom = async (roomId: string): Promise<boolean> => {
  try {
    await RoomModel.findOneAndUpdate(
      { roomId },
      { $set: { isActive: false } }
    );
    return true;
  } catch (error) {
    console.error('Error deactivating room:', error);
    throw error;
  }
}; 