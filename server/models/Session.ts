import mongoose, { Schema, Document } from 'mongoose';

export interface ISession extends Document {
  roomId: string;
  startTime: Date;
  endTime?: Date;
  participants: string[];
  messages: {
    userId: string;
    username: string;
    message: string;
    timestamp: Date;
  }[];
  isActive: boolean;
}

const SessionSchema: Schema = new Schema({
  roomId: { type: String, required: true },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  participants: [{ type: String }],
  messages: [{
    userId: String,
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
  }],
  isActive: { type: Boolean, default: true }
});

// Set TTL index to automatically delete sessions after 30 days
SessionSchema.index({ startTime: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

export default mongoose.models.Session || mongoose.model<ISession>('Session', SessionSchema); 