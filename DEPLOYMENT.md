# DigiColab Deployment Guide

This guide provides step-by-step instructions for deploying the DigiColab application with the frontend on Vercel and the backend on Render.

## Prerequisites

1. GitHub account with your DigiColab repository
2. MongoDB Atlas account
3. Vercel account
4. Render account

## Step 1: Prepare MongoDB Atlas

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (the free tier is sufficient for starting)
3. Set up a database user with read and write privileges
4. Configure network access to allow connections from anywhere (or specific IPs)
5. Get your MongoDB connection string:
   ```
   mongodb+srv://<username>:<password>@<cluster>.mongodb.net/digiboard
   ```

## Step 2: Deploy the Backend on Render

1. Sign up for a Render account at https://render.com
2. From your dashboard, click "New" and select "Web Service"
3. Connect your GitHub repository
4. Configure the web service:
   - **Name**: `digicolab-backend` (or your preferred name)
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add the following environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render will automatically set the PORT environment variable)
6. Click "Create Web Service"
7. Wait for the deployment to complete (this may take a few minutes)
8. Note the URL of your backend service (e.g., `https://digicolab-backend.onrender.com`)

## Step 3: Deploy the Frontend on Vercel

1. Sign up for a Vercel account at https://vercel.com
2. From your dashboard, click "Add New" and select "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Select "Next.js"
   - **Root Directory**: `./` (project root)
   - **Build Command**: `npm run build:next`
   - **Output Directory**: `.next`
5. Add the following environment variable:
   - `NEXT_PUBLIC_BACKEND_URL`: Your Render backend URL (from Step 2)
6. Click "Deploy"
7. Wait for the deployment to complete
8. Your frontend is now live at the provided Vercel URL

## Step 4: Update CORS Configuration (if needed)

If you encounter CORS issues, ensure that your backend server's CORS configuration includes your Vercel frontend URL:

1. In your Render dashboard, go to your backend service
2. Update the `FRONTEND_URL` environment variable to match your Vercel frontend URL

## Step 5: Testing the Deployment

1. Visit your Vercel frontend URL
2. Create a new whiteboard room
3. Share the room link with others
4. Verify that real-time collaboration works properly

## Troubleshooting

### Socket Connection Issues
- Check browser console for errors
- Verify that `NEXT_PUBLIC_BACKEND_URL` is correctly set in Vercel
- Ensure CORS is properly configured on the backend

### MongoDB Connection Errors
- Verify your MongoDB Atlas connection string
- Check if your IP is allowed in MongoDB Atlas Network Access
- Review the backend logs in Render

### Deployment Failures
- Check the build logs in Vercel or Render for specific errors
- Ensure all dependencies are correctly listed in package.json
- Verify that build scripts are correctly defined

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