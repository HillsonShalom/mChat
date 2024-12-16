import { Document, model, Schema } from "mongoose";
import IUser from "../models/userModel";

interface userDocument extends Document, IUser {}

export const userSchema = new Schema<userDocument>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    chats: {
        type: [Schema.Types.ObjectId],
        ref: 'Chat',
        default: []
    },
    contacts: {
        type: [{
            user: {
                type: Schema.ObjectId,
                ref: 'User',
            },
            nickname: {
                type: String
            }
        }],
        default: []
    },
    photoUrl: {
        type: String
    }
});

const UserModel = model('User', userSchema);

export default UserModel;