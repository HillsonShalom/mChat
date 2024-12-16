import Emoji from "./emoji";
import { Types } from "mongoose";
import IUser from "./userModel";
import IChat from "./chatModel";

interface IMessage {
    author: Types.ObjectId | IUser;
    createdAt: Date;
    updatedAt: Date;
    status: MsgStatus;

    content?: string;
    replyOn?: string;
    image?: File | string;
    voice?: ArrayBuffer;
    file?: File | string;

    likes: {
        from: Types.ObjectId | IUser;
        symbol: Emoji;
    }[]
}

export default IMessage


export enum MsgStatus {
    IDLE = 'IDLE',
    SENT = 'SENT',
    DELIVERED = 'DELIVERED',
    READ = 'READ'
}