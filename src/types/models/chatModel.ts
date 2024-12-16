import { Types } from "mongoose";
import IUser from "./userModel";

interface IChat {
    members: IUser[] | Types.ObjectId[];
}

export default IChat
