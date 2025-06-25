import { io, Socket } from "socket.io-client";
import { toast } from "react-toastify";

// Get the backend URL from environment or use default for development
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

// Configure socket options
const socketOptions = {
  transports: ["websocket", "polling"],
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  timeout: 20000,
};

// Use empty string for same-origin in development, or the full URL in production
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(BACKEND_URL, socketOptions);

// Set up socket event listeners
socket.on("connect", () => {
  console.log("Socket connected:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("Socket disconnected:", reason);
  if (reason === "io server disconnect") {
    // the disconnection was initiated by the server, reconnect manually
    socket.connect();
  }
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
  toast.error("Connection error. Please check your internet connection.");
});

socket.on("error", (errorMessage) => {
  console.error("Socket error:", errorMessage);
  toast.error(errorMessage || "An error occurred");
});

// Initialize connection
socket.connect();
