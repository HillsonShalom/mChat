import { Document, model, Schema } from "mongoose";
import IUser from "../models/userModel";

interface userDocument extends Document, IUser {}

export const userSchema = new Schema<userDocument>({
    username: {
        type: String
    },
    password: {
        type: String
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
        }]
    },
    photoUrl: {
        type: String
    }
});

const UserModel = model('User', userSchema);

export default UserModel;