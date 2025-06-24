import { io, Socket } from "socket.io-client";

// Get the backend URL from environment or use default for development
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

// Use empty string for same-origin in development, or the full URL in production
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(BACKEND_URL, {
  transports: ["websocket", "polling"],
});
