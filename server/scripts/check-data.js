/**
 * MongoDB Data Check Script
 * 
 * This script connects to MongoDB and displays collections and their contents
 * Run with: node server/scripts/check-data.js
 */

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Use the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/digicolab';

console.log(`Using URI: ${MONGODB_URI.replace(/:([^:@]+)@/, ':****@')}`); // Hide password in logs

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('✅ Successfully connected to MongoDB!');
    
    // Get database information
    const db = mongoose.connection.db;
    console.log(`Connected to database: ${db.databaseName}`);
    
    // List all collections
    const collections = await db.listCollections().toArray();
    console.log('\n📋 Collections in database:');
    
    if (collections.length === 0) {
      console.log('No collections found. Database is empty.');
    } else {
      for (const collection of collections) {
        console.log(`\n📁 Collection: ${collection.name}`);
        
        // Get count of documents
        const count = await db.collection(collection.name).countDocuments();
        console.log(`   Documents count: ${count}`);
        
        if (count > 0) {
          // Get sample documents (limit to 5)
          const documents = await db.collection(collection.name).find().limit(5).toArray();
          console.log('   Sample documents:');
          documents.forEach((doc, index) => {
            console.log(`   --- Document ${index + 1} ---`);
            // Format the document for better readability
            const formattedDoc = JSON.stringify(doc, null, 3)
              .split('\n')
              .map(line => '   ' + line)
              .join('\n');
            console.log(formattedDoc);
          });
          
          if (count > 5) {
            console.log(`   ... and ${count - 5} more documents`);
          }
        }
      }
    }
    
    // Close the connection
    await mongoose.connection.close();
    console.log('\n✅ MongoDB connection closed');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Failed to connect to MongoDB');
    console.error('Error details:', err.message);
    
    if (err.message.includes('ECONNREFUSED')) {
      console.log('\nTroubleshooting tips:');
      console.log('1. Check if MongoDB server is running');
      console.log('2. Verify the connection string');
      console.log('3. If using MongoDB Atlas, check if IP address is whitelisted');
    }
    
    process.exit(1);
  }); 