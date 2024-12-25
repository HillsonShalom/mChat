import { Socket, io } from "socket.io-client";


const socket = io(import.meta.env.VITE_BASE_URL, {
  auth: {
    token: `Bearer ${localStorage.getItem("token")}`,
  },
}) as Socket & { auth: {token: string }};

export function reconnectSocket() {

  socket.auth.token = localStorage.getItem("Authorization") || "";
  if (socket.connected) {
    socket.disconnect();
  }
  
  socket.connect();
}

export default socket
