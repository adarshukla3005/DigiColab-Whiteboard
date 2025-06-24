/**
 * MongoDB Backup Script
 * 
 * This script creates a backup of the MongoDB database.
 * Run with: node server/scripts/backup.js
 * 
 * Make sure to set MONGODB_URI in your environment variables.
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create backup directory if it doesn't exist
const backupDir = path.join(__dirname, '../../backups');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Get current date for backup filename
const date = new Date();
const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}`;
const backupPath = path.join(backupDir, `digiboard_backup_${dateString}`);

// Get MongoDB URI from environment variable
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/digiboard';

// Extract database name from URI
const dbName = mongoUri.split('/').pop().split('?')[0];

console.log(`Starting backup of ${dbName} database...`);

// Create backup command
let cmd;
if (mongoUri.startsWith('mongodb+srv')) {
  // MongoDB Atlas backup
  cmd = `mongodump --uri="${mongoUri}" --out="${backupPath}"`;
} else {
  // Local MongoDB backup
  cmd = `mongodump --uri="${mongoUri}" --out="${backupPath}"`;
}

// Execute backup command
exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during backup: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Backup stderr: ${stderr}`);
    return;
  }
  
  console.log(`Backup completed successfully at ${backupPath}`);
}); 