import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  socketId: string;
  username: string;
  roomId: string;
  joinedAt: Date;
  lastActive: Date;
  moves: any[];
}

const UserSchema: Schema = new Schema({
  socketId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  roomId: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
  moves: { type: Array, default: [] }
});

// Set TTL index to automatically delete users after 24 hours of inactivity
UserSchema.index({ lastActive: 1 }, { expireAfterSeconds: 24 * 60 * 60 });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema); 