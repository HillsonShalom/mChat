import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import UserModel from "../../types/schemas/userSchema";
import ChatModel from "../../types/schemas/chatSchema";
import MessageModel from "../../types/schemas/messageSchema";

const drop = async (req: Request, res: Response) => {
  try {
    await UserModel.collection.drop();
    await ChatModel.collection.drop();
    await MessageModel.collection.drop();

    res.send("data droped successfully");
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default drop;