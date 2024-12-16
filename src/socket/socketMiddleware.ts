import Token from "../types/DTOs/token";
import jwt from 'jsonwebtoken'
import { AuthenticatedSocket } from "./socketRouter"
import UserModel from "../types/schemas/userSchema";

const socketMiddleware = async (socket: AuthenticatedSocket, next: (err?: Error) => void) => {
    const authorization = socket.handshake.auth.token;
    if (!authorization) {
        return next(new Error("Auth"));
    }

    try {
        if (authorization.split(' ')[0] !== 'Bearer') throw new Error("Wrong token!");

        const token = authorization.split(' ')[1]
        const verified = jwt.verify(token, process.env.SECRET_KEY!) as Token
        const user = await UserModel.findById(verified.user)
        if (!user) throw new Error("Wrong token content");

        socket.user = user
        next()
    } catch(err) {
        next(new Error("Authentication error: Invalid token"));
    }
}

export default socketMiddleware