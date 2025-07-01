# DigiColab: Real-Time Collaborative Whiteboard
<div align="center">
  <img src="https://github.com/user-attachments/assets/d64644bb-6f23-483e-91e7-6d174e393600" alt="DigiColab Logo" width="200" />
  <p><strong>Collaborate, Create, Communicate</strong></p>
  <p>
    👉 <a href="https://whiteboard-mkss.onrender.com" target="_blank" rel="noopener noreferrer"><strong>Visit DigiColab</strong></a>
  </p>
  <p>(IITR wifi blocks the site use mobile data or wifi or VPN)</p>
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

DigiColab can be deployed to various platforms such as Vercel, Railway, or a traditional server setup.

### MongoDB Setup

1. **Local Development:**
   - Install MongoDB locally or use Docker
   - Connect using the URI: `mongodb://localhost:27017/digicolab`

2. **Production:**
   - Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
   - Create a new cluster
   - Configure network access and database users
   - Get your connection string: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/digicolab`
   - Add this connection string to your environment variables

### Deployment Options

#### Rendor Deployment
1. Create new project and import Repo from GitHub
2. Configure environment variables in the Vercel dashboard:
   - MONGODB_URI
   - NODE_ENV=production
3. `npm build next`
4. Ready for deployment

#### Railway Deployment

1. Create a Railway account
2. Connect your GitHub repository
3. Add MongoDB as a plugin or use external MongoDB Atlas
4. Configure environment variables:
   - MONGODB_URI
   - NODE_ENV=production

#### Heroku Deployment

1. Create a Heroku account
2. Install Heroku CLI and login
3. Create a new Heroku app
4. Add MongoDB Atlas as an add-on or use external connection
5. Configure environment variables in Heroku dashboard

### Deployed Demo

You can try out DigiColab at: [https://digicolab.vercel.app](https://digicolab.vercel.app)

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


