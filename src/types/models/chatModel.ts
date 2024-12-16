import { Types } from "mongoose";
import IUser from "./userModel";
import IMessage from "./messageModel";
import IGroup from "./groupModel";

interface IChat {
    members: IUser[] | Types.ObjectId[];
    messages: IMessage[] | Types.ObjectId[];
    group?: IGroup | Types.ObjectId
}

export default IChat
