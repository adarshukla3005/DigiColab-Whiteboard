# DigiBoard Backend Server

This is the backend server for the DigiBoard real-time collaborative whiteboard application.

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/digiboard

# Server Configuration
PORT=3000
NODE_ENV=production

# Frontend URL for CORS
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm install
npm run build
npm start
``` 