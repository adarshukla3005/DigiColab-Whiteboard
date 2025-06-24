import Room from '../models/Room';
import User from '../models/User';
import Session from '../models/Session';

/**
 * Database operations for rooms
 */
export const RoomOperations = {
  // Get a room by ID
  getRoom: async (roomId: string) => {
    try {
      return await Room.findOne({ roomId });
    } catch (error) {
      console.error('Error getting room:', error);
      return null;
    }
  },
  
  // Update room data
  updateRoom: async (roomId: string, data: any) => {
    try {
      return await Room.updateOne({ roomId }, { $set: data });
    } catch (error) {
      console.error('Error updating room:', error);
      return null;
    }
  },
  
  // Save room drawing data
  saveDrawings: async (roomId: string, drawings: any[]) => {
    try {
      return await Room.updateOne(
        { roomId },
        { $set: { drawed: drawings } }
      );
    } catch (error) {
      console.error('Error saving drawings:', error);
      return null;
    }
  }
};

/**
 * Database operations for users
 */
export const UserOperations = {
  // Get all users in a room
  getRoomUsers: async (roomId: string) => {
    try {
      return await User.find({ roomId });
    } catch (error) {
      console.error('Error getting room users:', error);
      return [];
    }
  },
  
  // Update user activity timestamp
  updateUserActivity: async (socketId: string) => {
    try {
      return await User.updateOne(
        { socketId },
        { $set: { lastActive: new Date() } }
      );
    } catch (error) {
      console.error('Error updating user activity:', error);
      return null;
    }
  }
};

/**
 * Database operations for sessions
 */
export const SessionOperations = {
  // Get active session for a room
  getActiveSession: async (roomId: string) => {
    try {
      return await Session.findOne({ roomId, isActive: true });
    } catch (error) {
      console.error('Error getting active session:', error);
      return null;
    }
  },
  
  // Get chat messages for a room
  getChatMessages: async (roomId: string) => {
    try {
      const session = await Session.findOne({ roomId, isActive: true });
      return session?.messages || [];
    } catch (error) {
      console.error('Error getting chat messages:', error);
      return [];
    }
  },
  
  // End session
  endSession: async (roomId: string) => {
    try {
      return await Session.updateOne(
        { roomId, isActive: true },
        { $set: { isActive: false, endTime: new Date() } }
      );
    } catch (error) {
      console.error('Error ending session:', error);
      return null;
    }
  }
}; 