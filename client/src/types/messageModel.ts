import Emoji from "./emoji";

interface IMessage {
    id: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    status: MsgStatus;

    content?: string;
    replyOn?: string;
    image?: File;
    voice?: ArrayBuffer;
    file?: File;

    likes: {
        from: string;
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