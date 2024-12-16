import Emoji from "../models/emoji";
import { MsgStatus } from "../models/messageModel";

interface populatedChat {
  members: {
    _id: string;
    username: string;
    photoUrl?: string;
  }[];
  messages: {
    _id: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    status: MsgStatus;
    content?: string;
    replyOn?: string;
    image?: File | string;
    voice?: ArrayBuffer;
    file?: File | string;
    likes: {
        from: string;
        symbol: Emoji;
    }[]
  }[];
  group?: {
    name: string;
    admins: string[];
    photoUrl?: string;
  };
}

export default populatedChat
