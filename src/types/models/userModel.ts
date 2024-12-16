import { ObjectId, Types } from "mongoose";

interface IUser {
    username: string;
    password: string;
    contacts: {
        user: ObjectId | IUser;
        nickname: string;
    }[];
    
    photoUrl?: string;
}

export default IUser
