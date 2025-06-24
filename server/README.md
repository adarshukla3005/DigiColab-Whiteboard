# DigiColab Backend Server

This is the backend server for the DigiColab collaborative whiteboard application.

## Features

- Real-time drawing collaboration using Socket.IO
- User management and room creation
- Chat functionality
- MongoDB integration for data persistence

## Deployment on Railway

### Prerequisites

1. Create a MongoDB Atlas database
2. Create a [Railway](https://railway.app) account

### Steps to Deploy on Railway

1. Fork or clone this repository
2. Log in to [Railway](https://railway.app)
3. Click "New Project" and select "Deploy from GitHub repo"
4. Connect your GitHub account and select this repository
5. Configure the service with these settings:
   - **Root Directory**: `server`
   - **Environment Variables**:
     - `PORT`: 8000 (Railway will override this with its own port)
     - `MONGODB_URI`: Your MongoDB connection string
     - `FRONTEND_URL`: Your Vercel frontend URL (e.g., https://your-app.vercel.app)
     - `NODE_ENV`: production

6. Click "Deploy"
7. Once deployed, go to the "Settings" tab and find your project's URL
8. Use this URL as the `NEXT_PUBLIC_BACKEND_URL` in your Vercel frontend

## Local Development

1. Clone the repository
2. Create a `.env` file in the server directory with:
   ```
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:3000
   NODE_ENV=development
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /health`: Health check endpoint
- `GET /api/rooms/:roomId`: Get information about a specific room

## WebSocket Events

### Client to Server
- `create_room`: Create a new room
- `join_room`: Join an existing room
- `leave_room`: Leave the current room
- `draw`: Send a drawing move
- `undo`: Undo the last drawing move
- `clear`: Clear the whiteboard
- `mouse_move`: Update mouse position
- `send_message`: Send a chat message

### Server to Client
- `created`: Room created
- `joined`: Successfully joined a room
- `user_joined`: A new user joined
- `user_left`: A user left
- `user_draw`: Drawing update from a user
- `user_undo`: User undid their last move
- `cleared`: Whiteboard cleared
- `mouse_moved`: Mouse position update
- `new_message`: New chat message
- `room_users`: List of users in the room
- `drawed`: Previously drawn content 