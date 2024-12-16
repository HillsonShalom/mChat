import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import { userDocument } from "../../types/schemas/userSchema";
import ChatModel from "../../types/schemas/chatSchema";
import populatedChat from "../../types/queries/populatedChat";

const getChat = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = req.user as userDocument;

    const chat = (await ChatModel.findById(req.params.id)
      .populate([
        { path: "members", select: "-password -chats" },
        { path: "messages" },
        { path: "group" },
      ])
      .exec()) as unknown as populatedChat
    if (!chat) throw new AppResError(404, "chat not found!");

    // להשלים את השליחה בפורמט המתאים
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getChat;
