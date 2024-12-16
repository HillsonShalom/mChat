import { Document, model, Schema } from "mongoose";
import IChat from "../models/chatModel";

interface chatDocument extends Document, IChat {}

export const chatSchema = new Schema<chatDocument>(
  {
    members: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    messages: {
      type: [Schema.Types.ObjectId],
      ref: 'Message',
      default: []
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group'
    }
  },
  { timestamps: true }
);

const ChatModel = model("Chat", chatSchema);

export default ChatModel;
