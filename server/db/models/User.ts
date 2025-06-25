import mongoose, { Document, Schema } from 'mongoose';

interface IUserDocument extends Document {
  userId: string;
  username: string;
  color: string;
  roomId: string;
  joinedAt: Date;
  isActive: boolean;
}

const UserSchema = new Schema<IUserDocument>({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: "#000000"
  },
  roomId: {
    type: String,
    required: true,
    index: true
  },
  joinedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const UserModel = mongoose.models.User as mongoose.Model<IUserDocument> || 
  mongoose.model<IUserDocument>('User', UserSchema);

export default UserModel; 