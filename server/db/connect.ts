import mongoose from 'mongoose';

// Define connection options
const options: mongoose.ConnectOptions = {
  bufferCommands: true,
};

// Cache interface
interface MongooseCache {
  isConnected?: boolean;
  promise?: Promise<typeof mongoose>;
}

// Global cache
let globalCache: MongooseCache = {};

/**
 * Connect to MongoDB
 */
async function connectDB(): Promise<typeof mongoose> {
  // Get the MongoDB URI from environment variables
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/digicolab';
  
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  
  console.log('Using URI:', MONGODB_URI.replace(/:([^:@]+)@/, ':****@'));

  // If already connected, return the existing connection
  if (globalCache.isConnected && mongoose.connection.readyState === 1) {
    console.log('Using existing MongoDB connection');
    return mongoose;
  }

  // If connection is in progress, wait for it
  if (globalCache.promise) {
    console.log('Waiting for existing MongoDB connection');
    await globalCache.promise;
    return mongoose;
  }

  try {
    // Create a new connection
    console.log('Creating new MongoDB connection');
    const promise = mongoose.connect(MONGODB_URI, options);
    globalCache.promise = promise;

    await promise;
    globalCache.isConnected = true;
    
    // Set up connection event listeners
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      globalCache.isConnected = false;
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      globalCache.isConnected = false;
    });
    
    console.log('Connected to MongoDB');
    return mongoose;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    globalCache = {}; // Reset on error
    throw error;
  }
}

export default connectDB; 