import { Document, model, Schema } from "mongoose";
import IMessage, { MsgStatus } from "../models/messageModel";
import Emoji from "../models/emoji";

interface messageDocument extends Document, IMessage {}

export const messageSchema = new Schema<messageDocument>({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: Object.keys(MsgStatus),
        default: MsgStatus.IDLE
    },
    content: {
        type: String
    },
    replyOn: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    },
    image: {
        type: String
    },
    voice: {
        type: Schema.Types.Buffer
    },
    file: {
        type: String
    },
    likes: {
        type: [{
            from: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            symbol: {
                type: String,
                enum: Object.keys(Emoji)
            }
        }],
        default: []
    }
}, {timestamps: true});

const MessageModel = model('Message', messageSchema);

export default MessageModel;