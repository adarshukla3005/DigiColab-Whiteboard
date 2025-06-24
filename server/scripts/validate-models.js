/**
 * MongoDB Models Validation Script
 * 
 * This script validates MongoDB models and connection using the provided credentials
 * Run with: node server/scripts/validate-models.js
 */

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Use the MongoDB URI from environment variables exactly as provided
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not defined in .env file');
  process.exit(1);
}

console.log('Validating MongoDB models and connection...');
console.log(`Using URI: ${MONGODB_URI.replace(/:([^:@]+)@/, ':****@')}`); // Hide password in logs

// Define schemas
const RoomSchema = new mongoose.Schema(
  {
    roomId: { type: String, required: true, unique: true },
    drawed: { type: Array, default: [] },
    isActive: { type: Boolean, default: true },
    maxUsers: { type: Number, default: 12 }
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema({
  socketId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  roomId: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
  moves: { type: Array, default: [] }
});

const SessionSchema = new mongoose.Schema({
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

// Enable mongoose debug mode
mongoose.set('debug', true);

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('✅ Successfully connected to MongoDB!');
    
    try {
      // Create models
      const Room = mongoose.model('Room', RoomSchema);
      const User = mongoose.model('User', UserSchema);
      const Session = mongoose.model('Session', SessionSchema);
      
      console.log('✅ Models created successfully');
      
      // Validate connection by checking collections
      const db = mongoose.connection.db;
      console.log(`Connected to database: ${db.databaseName}`);
      
      const collections = await db.listCollections().toArray();
      console.log('\n📋 Collections in database:');
      if (collections.length === 0) {
        console.log('No collections found. Database is empty.');
      } else {
        console.log(collections.map(c => c.name).join(', '));
      }
      
      // Test model operations
      console.log('\n🧪 Testing model operations...');
      
      // Test Room model
      console.log('\nTesting Room model:');
      const roomCount = await Room.countDocuments();
      console.log(`- Room count: ${roomCount}`);
      
      // Test User model
      console.log('\nTesting User model:');
      const userCount = await User.countDocuments();
      console.log(`- User count: ${userCount}`);
      
      // Test Session model
      console.log('\nTesting Session model:');
      const sessionCount = await Session.countDocuments();
      console.log(`- Session count: ${sessionCount}`);
      
      // Create a test room with unique ID to verify write permissions
      const testRoomId = 'validate-test-' + Date.now();
      console.log(`\nCreating test room with ID: ${testRoomId}`);
      
      try {
        const room = await Room.create({
          roomId: testRoomId,
          isActive: true
        });
        console.log('✅ Test room created successfully');
        
        // Clean up test data
        await Room.deleteOne({ roomId: testRoomId });
        console.log('✅ Test room deleted successfully');
      } catch (error) {
        console.error('❌ Failed to create test room:', error.message);
        if (error.code === 11000) {
          console.error('This is a duplicate key error. Check if your roomId is unique.');
        }
      }
      
      console.log('\n✅ MongoDB validation complete!');
    } catch (error) {
      console.error('Error during validation:', error);
    } finally {
      // Close the connection
      await mongoose.connection.close();
      console.log('\n✅ MongoDB connection closed');
      process.exit(0);
    }
  })
  .catch(err => {
    console.error('❌ Failed to connect to MongoDB');
    console.error('Error details:', err.message);
    
    if (err.name === 'MongoServerSelectionError') {
      console.log('\nThis error typically occurs when:');
      console.log('1. The MongoDB server is not running');
      console.log('2. Network connectivity issues');
      console.log('3. Authentication failed (incorrect username/password)');
      console.log('4. IP address is not whitelisted in MongoDB Atlas');
    }
    
    process.exit(1);
  }); 