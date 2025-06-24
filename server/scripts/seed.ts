/**
 * MongoDB Seed Script
 * 
 * This script seeds the MongoDB database with initial data.
 * Run with: npm run db:seed
 */

import connectDB from '../db/connect';
import Room from '../models/Room';
import User from '../models/User';
import Session from '../models/Session';
import { v4 as uuidv4 } from 'uuid';

async function seedDatabase() {
  try {
    // Connect to the database
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Room.deleteMany({});
    await User.deleteMany({});
    await Session.deleteMany({});
    console.log('Cleared existing data');

    // Create a demo room
    const demoRoomId = 'demo';
    const demoRoom = await Room.create({
      roomId: demoRoomId,
      drawed: [],
      isActive: true,
      maxUsers: 12
    });
    console.log('Created demo room:', demoRoomId);

    // Create demo users
    const users = [
      { socketId: uuidv4(), username: 'DemoUser1', roomId: demoRoomId },
      { socketId: uuidv4(), username: 'DemoUser2', roomId: demoRoomId }
    ];

    const createdUsers = await User.insertMany(users);
    console.log(`Created ${createdUsers.length} demo users`);

    // Create a demo session
    const demoSession = await Session.create({
      roomId: demoRoomId,
      participants: users.map(user => user.socketId),
      messages: [
        {
          userId: users[0].socketId,
          username: users[0].username,
          message: 'Welcome to DigiColab!',
          timestamp: new Date()
        },
        {
          userId: users[1].socketId,
          username: users[1].username,
          message: 'This is a demo whiteboard room.',
          timestamp: new Date()
        }
      ],
      isActive: true
    });
    console.log('Created demo session');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase(); 