import { Types } from "mongoose";
import { Server, Socket } from "socket.io";
import IUser from "../types/models/userModel";
import socketMiddleware from "./socketMiddleware";

class SocketRouter {
  static users = new Map<string, Socket>();

  constructor(private io: Server) {
    this.io.use(socketMiddleware);
  }

  connection = async (socket: AuthenticatedSocket) => {

  }
}

export default SocketRouter;

export interface AuthenticatedSocket extends Socket {
  user?: Types.ObjectId | IUser;
}
