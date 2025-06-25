import UserModel from '../models/User';

// Add a user to a room
export const addUserToRoom = async (
  userId: string, 
  username: string, 
  roomId: string, 
  color?: string
): Promise<any> => {
  try {
    const existingUser = await UserModel.findOne({ userId, roomId });
    
    if (existingUser) {
      // Update existing user
      existingUser.username = username;
      existingUser.isActive = true;
      existingUser.color = color || existingUser.color;
      await existingUser.save();
      return existingUser;
    }
    
    // Create new user
    const user = new UserModel({
      userId,
      username,
      roomId,
      color: color || "#000000",
      isActive: true
    });
    
    await user.save();
    return user;
  } catch (error) {
    console.error('Error adding user to room:', error);
    throw error;
  }
};

// Get all users in a room
export const getRoomUsers = async (roomId: string): Promise<any[]> => {
  try {
    const users = await UserModel.find({ 
      roomId, 
      isActive: true 
    });
    return users;
  } catch (error) {
    console.error('Error fetching room users:', error);
    throw error;
  }
};

// Remove a user from a room
export const removeUserFromRoom = async (userId: string, roomId: string): Promise<boolean> => {
  try {
    await UserModel.findOneAndUpdate(
      { userId, roomId },
      { $set: { isActive: false } }
    );
    return true;
  } catch (error) {
    console.error('Error removing user from room:', error);
    throw error;
  }
};

// Get user by ID
export const getUserById = async (userId: string): Promise<any> => {
  try {
    const user = await UserModel.findOne({ userId });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}; 