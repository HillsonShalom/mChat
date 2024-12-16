import { Types } from "mongoose";
import IUser from "./userModel";
import IMessage from "./messageModel";

interface IGroup {
    name: string;
    admins: Types.ObjectId[] | IUser[];
    photoUrl?: string;
}

export default IGroup
