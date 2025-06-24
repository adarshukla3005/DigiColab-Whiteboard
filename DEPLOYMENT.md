# DigiColab Deployment Guide

This guide explains how to deploy the DigiColab collaborative whiteboard application.

## Architecture

The application consists of two main components:
1. **Frontend**: A Next.js application deployed on Vercel
2. **Backend**: A Node.js/Express/Socket.IO server deployed on Render

## Frontend Deployment (Vercel)

1. Fork or clone the repository
2. Create an account on [Vercel](https://vercel.com) if you don't have one
3. Create a new project and connect it to your GitHub repository
4. Configure the following environment variables:
   - `NEXT_PUBLIC_BACKEND_URL`: URL of your backend (e.g., https://digicolab-backend.onrender.com)
5. Deploy the project

## Backend Deployment (Render)

1. Create an account on [Render](https://render.com) if you don't have one
2. Create a new Web Service and connect it to your GitHub repository
3. Configure the service with these settings:
   - **Name**: digicolab-backend (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `cd server && npm install && npm run build`
   - **Start Command**: `cd server && node dist/standalone.js`
   - **Auto-Deploy**: Enable (optional)

4. Add the following environment variables:
   - `PORT`: 8000 (Render will override this with its own port)
   - `MONGODB_URI`: Your MongoDB connection string
   - `FRONTEND_URL`: Your Vercel frontend URL (e.g., https://your-app.vercel.app)
   - `NODE_ENV`: production

5. Click "Create Web Service"

## MongoDB Setup

1. Create a MongoDB Atlas account if you don't have one
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string and add it to your backend environment variables

## Testing Your Deployment

1. Open your Vercel frontend URL
2. Create a new room
3. Verify that real-time collaboration works by opening the room in multiple browser windows

## Troubleshooting

### Frontend Issues
- Check browser console for errors
- Verify that the `NEXT_PUBLIC_BACKEND_URL` is correctly set
- Ensure CORS is properly configured on the backend

### Backend Issues
- Check Render logs for errors
- Verify MongoDB connection string is correct
- Check that the server is running by accessing the health endpoint: `https://your-backend.onrender.com/health`

### Connection Issues
- Ensure WebSocket connections are allowed by your firewall/proxy
- Check that the Socket.IO connection is established in the browser console

## Scaling Considerations

### MongoDB Atlas
- Monitor database performance and upgrade your plan as needed
- Set up database backups for data safety

### Render
- Consider upgrading to a paid plan for better performance and reliability
- Set up health checks and monitoring

### Vercel
- Configure custom domains for a professional appearance
- Set up preview deployments for testing changes before production

## Maintenance

- Regularly update dependencies for security and performance improvements
- Monitor error logs and application performance
- Set up automated backups for your MongoDB database

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Socket.IO Deployment Guide](https://socket.io/docs/v4/deployment/) 