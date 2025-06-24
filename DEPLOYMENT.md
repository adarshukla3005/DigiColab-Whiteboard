# DigiColab Deployment Guide

This guide explains how to deploy the DigiColab collaborative whiteboard application.

## Architecture

The application consists of two main components:
1. **Frontend**: A Next.js application deployed on Vercel
2. **Backend**: A Node.js/Express/Socket.IO server deployed on Railway

## Frontend Deployment (Vercel)

1. Fork or clone the repository
2. Create an account on [Vercel](https://vercel.com) if you don't have one
3. Create a new project and connect it to your GitHub repository
4. Configure the following environment variables:
   - `NEXT_PUBLIC_BACKEND_URL`: URL of your backend (from Railway deployment)
5. Deploy the project

## Backend Deployment (Railway)

1. Create an account on [Railway](https://railway.app) if you don't have one
2. From your dashboard, click "New Project" and select "Deploy from GitHub repo"
3. Connect your GitHub account and select your repository
4. Configure the service:
   - **Root Directory**: `server`
   - **Environment Variables**:
     - `PORT`: 8000 (Railway will override this with its own port)
     - `MONGODB_URI`: Your MongoDB connection string
     - `FRONTEND_URL`: Your Vercel frontend URL (e.g., https://your-app.vercel.app)
     - `NODE_ENV`: production
5. Click "Deploy"
6. Once deployed, Railway will provide a URL for your backend service
7. Use this URL as the `NEXT_PUBLIC_BACKEND_URL` in your Vercel project

## Connecting Frontend to Backend

1. Go to your Vercel project settings
2. Under "Environment Variables", add or update:
   - `NEXT_PUBLIC_BACKEND_URL`: Your Railway backend URL
3. Redeploy your Vercel project to apply the changes

## MongoDB Setup

1. Create a MongoDB Atlas account if you don't have one
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string and add it to your Railway environment variables

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
- Check Railway logs for errors
- Verify MongoDB connection string is correct
- Check that the server is running by accessing the health endpoint: `https://your-backend-url/health`

### Connection Issues
- Ensure WebSocket connections are allowed by your firewall/proxy
- Check that the Socket.IO connection is established in the browser console

## Railway-Specific Tips

1. **Automatic Deployments**: Railway automatically deploys when you push to your GitHub repository
2. **Monitoring**: Railway provides logs and metrics for your application
3. **Scaling**: You can easily scale your application in the Railway dashboard
4. **Custom Domains**: You can add a custom domain to your Railway project in the settings

## Scaling Considerations

### MongoDB Atlas
- Monitor database performance and upgrade your plan as needed
- Set up database backups for data safety

### Railway
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
- [Railway Documentation](https://railway.app/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Socket.IO Deployment Guide](https://socket.io/docs/v4/deployment/) 