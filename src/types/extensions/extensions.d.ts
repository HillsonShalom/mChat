import { Types } from "mongoose"
import { userDocument } from "../schemas/userSchema"

declare module 'express' {
    interface Request {
        user?: userDocument
    }
}

export {}