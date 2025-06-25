import mongoose, { Document, Schema } from 'mongoose';

interface IRoomDocument extends Document {
  roomId: string;
  createdAt: Date;
  users: Map<string, string>;
  usersMoves: Record<string, any[]>;
  drawed: any[];
  isActive: boolean;
}

const RoomSchema = new Schema<IRoomDocument>({
  roomId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  users: {
    type: Map,
    of: String,
    default: new Map()
  },
  usersMoves: {
    type: Schema.Types.Mixed,
    default: {}
  },
  drawed: {
    type: [Object],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { 
  timestamps: true 
});

// Convert the complex data structures like Map to JSON-friendly formats
RoomSchema.methods.toJSON = function() {
  const obj = this.toObject();
  
  // Convert Maps to objects for serialization
  if (obj.users instanceof Map) {
    obj.users = Object.fromEntries(obj.users);
  }
  
  if (obj.usersMoves instanceof Map) {
    obj.usersMoves = Object.fromEntries(obj.usersMoves);
  }
  
  return obj;
};

const RoomModel = mongoose.models.Room as mongoose.Model<IRoomDocument> || 
  mongoose.model<IRoomDocument>('Room', RoomSchema);

export default RoomModel; 