import MessageModel from '../models/Message';

// Add a chat message
export const addChatMessage = async (
  roomId: string, 
  userId: string, 
  username: string, 
  message: string
): Promise<any> => {
  try {
    const newMessage = new MessageModel({
      roomId,
      userId,
      username,
      message
    });
    
    await newMessage.save();
    return newMessage;
  } catch (error) {
    console.error('Error adding chat message:', error);
    throw error;
  }
};

// Get chat messages for a room
export const getChatMessages = async (roomId: string, limit: number = 50): Promise<any[]> => {
  try {
    const messages = await MessageModel.find({ roomId })
      .sort({ timestamp: -1 })
      .limit(limit);
    
    return messages.reverse(); // Return in chronological order
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    throw error;
  }
}; 