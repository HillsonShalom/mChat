import { Types } from "mongoose";
import IChat from "./chatModel";

interface IUser {
  username: string;
  password: string;
  contacts: {
    user: Types.ObjectId | IUser;
    nickname: string;
  }[];
  chats: Types.ObjectId[] | IChat[];

  photoUrl?: string;
}

export default IUser;
