import mongoose, { Document, Schema } from 'mongoose';

interface IMessageDocument extends Document {
  roomId: string;
  userId: string;
  username: string;
  message: string;
  timestamp: Date;
}

const MessageSchema = new Schema<IMessageDocument>({
  roomId: {
    type: String,
    required: true,
    index: true
  },
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { 
  timestamps: true 
});

const MessageModel = mongoose.models.Message as mongoose.Model<IMessageDocument> || 
  mongoose.model<IMessageDocument>('Message', MessageSchema);

export default MessageModel; 