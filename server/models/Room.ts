import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
  drawed: any[];
  isActive: boolean;
  maxUsers: number;
}

const RoomSchema: Schema = new Schema(
  {
    roomId: { type: String, required: true, unique: true },
    drawed: { type: Array, default: [] },
    isActive: { type: Boolean, default: true },
    maxUsers: { type: Number, default: 12 }
  },
  { timestamps: true }
);

// Set TTL index to automatically delete rooms after 7 days of inactivity
RoomSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 7 * 24 * 60 * 60 });

export default mongoose.models.Room || mongoose.model<IRoom>('Room', RoomSchema); 