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

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Nodemon**: Development server with hot reloading

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

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

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start both the frontend and backend servers concurrently.

4. **Access the application:**
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

DigiColab can be deployed to various platforms such as Vercel, Netlify, or a traditional server setup.

### Deployed Demo

You can try out DigiColab at: [https://digicolab.vercel.app](https://digicolab.vercel.app)


