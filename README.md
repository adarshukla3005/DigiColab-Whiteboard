# DigiColab: Real-Time Collaborative Whiteboard

<div align="center">
  <img src="public/digicolab-logo.png" alt="DigiColab Logo" width="200" />
  <p><strong>Collaborate, Create, Communicate</strong></p>
</div>

## 📝 Project Description

DigiColab is a modern, real-time collaborative whiteboard application designed for teams to brainstorm, plan, and visualize ideas together regardless of their physical location. The application provides an intuitive interface that enables multiple users to draw, write, and manipulate objects on a shared canvas simultaneously.

With DigiColab, teams can:
- Collaborate in real-time with team members
- Visualize complex ideas through drawing and annotation
- Share whiteboards easily with others
- Export their work for documentation or presentations

Whether you're planning a project, teaching a class, or brainstorming new ideas, DigiColab provides the digital canvas you need for effective collaboration.

## ✨ Features

### Core Features
- **Real-time Collaboration**: Multiple users can work on the same whiteboard simultaneously
- **User Presence**: See who's currently in the room and their cursor positions
- **Drawing Tools**: Pen tool with adjustable line width and color
- **Shape Tools**: Create rectangles, circles, and lines with customizable properties
- **Selection Tool**: Select, move, copy, and delete drawn elements
- **Eraser Tool**: Remove unwanted content from the canvas
- **Text Chat**: Built-in chat functionality for communication without leaving the whiteboard
- **User List**: See all participants in the current session

### Advanced Features
- **Image Upload**: Add images to the whiteboard
- **Background Options**: Change the whiteboard background (grid, color, etc.)
- **Room Sharing**: Generate and share room links for others to join
- **Canvas Navigation**: Pan and zoom functionality for large whiteboards
- **Minimap**: Navigate large whiteboards with an overview thumbnail
- **Download**: Export the whiteboard as a PNG image
- **Undo/Redo**: Revert or restore recent changes
- **Responsive Design**: Works on desktop and tablet devices
- **Persistent Storage**: Room data is stored in MongoDB for persistence

## 🛠️ Tech Stack

### Frontend
- **React**: UI component library
- **Next.js**: React framework for server-side rendering and routing
- **TypeScript**: Type-safe JavaScript
- **Recoil**: State management
- **Framer Motion**: Animations and transitions
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Icons**: Icon library

### Backend
- **Node.js**: JavaScript runtime
- **Socket.IO**: Real-time bidirectional event-based communication
- **Express**: Web application framework
- **MongoDB**: NoSQL database for persistent storage
- **Mongoose**: MongoDB object modeling for Node.js

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Nodemon**: Development server with hot reloading

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local or Atlas connection)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/digicolab.git
   cd digicolab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string/digicolab
   PORT=3000
   NODE_ENV=development
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start both the frontend and backend servers concurrently.

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## 🌐 Deployment

DigiColab can be deployed with the frontend on Vercel and the backend on Render.

### MongoDB Setup

1. **Local Development:**
   - Install MongoDB locally or use Docker
   - Connect using the URI: `mongodb://localhost:27017/digicolab`

2. **Production:**
   - Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
   - Create a new cluster
   - Configure network access and database users
   - Get your connection string: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/digicolab`
   - Add this connection string to your environment variables in Render

### Deployment Steps

#### Backend Deployment on Render

1. **Create a Render account** at https://render.com

2. **Create a new Web Service**:
   - Connect your GitHub repository
   - Select the repository containing your DigiColab project
   - Configure the service:
     - Name: `digicolab-backend`
     - Root Directory: `server`
     - Runtime: `Node`
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`

3. **Add environment variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render will automatically set the PORT environment variable)
   - `FRONTEND_URL`: Your Vercel frontend URL (e.g., `https://digicolab.vercel.app`)

4. **Deploy the service**:
   - Click "Create Web Service"
   - Wait for the deployment to complete

5. **Note your backend URL** (e.g., `https://digicolab-backend.onrender.com`)

#### Frontend Deployment on Vercel

1. **Create a Vercel account** at https://vercel.com

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy from the Vercel dashboard**:
   - Connect your GitHub repository
   - Import your DigiColab project
   - Configure the project:
     - Framework Preset: `Next.js`
     - Root Directory: `./` (project root)
     - Build Command: `npm run build:next`
     - Output Directory: `.next`

4. **Add environment variables**:
   - `NEXT_PUBLIC_BACKEND_URL`: Your Render backend URL (e.g., `https://digicolab-backend.onrender.com`)

5. **Deploy the project**:
   - Click "Deploy"
   - Wait for the deployment to complete

6. **Configure your custom domain** (optional):
   - Go to the project settings
   - Add your domain and configure DNS settings

### Testing Your Deployment

1. Visit your Vercel frontend URL
2. Create a new whiteboard room
3. Share the room link with others
4. Verify that real-time collaboration works properly

### Troubleshooting

- **Socket Connection Issues**: Make sure CORS is properly configured and the backend URL is correct
- **MongoDB Connection Errors**: Verify your MongoDB Atlas connection string and network access settings
- **Deployment Failures**: Check the build logs in Vercel or Render for specific errors

## Database Scripts

The application includes utility scripts for database operations:

- `npm run db:validate` - Validate MongoDB models and connection
- `npm run db:check` - Check database contents
- `npm run db:backup` - Backup database data
- `npm run db:seed` - Seed the database with initial data

## Data Models

### Room Model
- `roomId` - Unique identifier for the room
- `drawed` - Array of drawing objects
- `isActive` - Whether the room is active
- `maxUsers` - Maximum number of users allowed in the room
- `createdAt` - When the room was created
- `updatedAt` - When the room was last updated

### User Model
- `socketId` - Unique identifier for the user
- `username` - User's display name
- `roomId` - Room the user belongs to
- `moves` - Array of user's drawing moves
- `joinedAt` - When the user joined
- `lastActive` - When the user was last active

### Session Model
- `roomId` - Room the session belongs to
- `participants` - Array of user socket IDs
- `messages` - Array of chat messages
- `isActive` - Whether the session is active
- `startTime` - When the session started

## License

This project is licensed under the MIT License.


