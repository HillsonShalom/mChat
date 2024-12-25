import { Types } from "mongoose";
import { Server, Socket } from "socket.io";
import IUser from "../types/models/userModel";
import socketMiddleware from "./socketMiddleware";
import { userDocument } from "../types/schemas/userSchema";
import getAllUsers from "./services/getAllUsers";

class SocketRouter {
  static users = new Map<string, Socket>();

  constructor(private io: Server) {
    this.io.use(socketMiddleware);
  }

  connection = async (socket: AuthenticatedSocket) => {
    const user = socket.user as userDocument
    SocketRouter.users.set(user.id, socket)
    console.log(user.username + " connected");
    // SocketRouter.users.set(socket.user as string, socket);

    socket.on('all-users', async () => {
      const [d, e] = await getAllUsers()
      if (d) {
        socket.emit('all-users', d)
      }
    })

    socket.on('disconnect', () => {
      console.log(user.username + "disconnected");
    })
  }
}

export default SocketRouter;

export interface AuthenticatedSocket extends Socket {
  user?: Types.ObjectId | userDocument;
}
