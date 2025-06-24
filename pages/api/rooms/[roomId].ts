import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../server/db/connect';
import { RoomOperations, SessionOperations, UserOperations } from '../../../server/db/operations';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Connect to MongoDB
  await connectDB();
  
  const { roomId } = req.query;
  
  if (!roomId || typeof roomId !== 'string') {
    return res.status(400).json({ error: 'Invalid room ID' });
  }
  
  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      try {
        // Get room data
        const room = await RoomOperations.getRoom(roomId);
        
        if (!room) {
          return res.status(404).json({ error: 'Room not found' });
        }
        
        // Get users in the room
        const users = await UserOperations.getRoomUsers(roomId);
        
        // Get chat messages
        const messages = await SessionOperations.getChatMessages(roomId);
        
        return res.status(200).json({
          room,
          users,
          messages,
        });
      } catch (error) {
        console.error('Error fetching room data:', error);
        return res.status(500).json({ error: 'Failed to fetch room data' });
      }
      
    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
} 