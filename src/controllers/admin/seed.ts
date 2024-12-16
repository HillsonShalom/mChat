import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import UserModel from "../../types/schemas/userSchema";
import ChatModel from "../../types/schemas/chatSchema";
import MessageModel from "../../types/schemas/messageSchema";
import { MsgStatus } from "../../types/models/messageModel";

const seed = async (req: Request, res: Response) => {
  try {
    if (
      await UserModel.countDocuments() &&
      await MessageModel.countDocuments() &&
      await ChatModel.countDocuments()
    ) {
      res.send("data already exists");
      return;
    }

    const me = await new UserModel({
      username: "צביקי",
      password: "1234",
    }).save();
    const mam = await new UserModel({
      username: "אמא",
      password: "1234",
    }).save();

    const msg1 = await new MessageModel({
      author: me.id,
      status: MsgStatus.SENT,
      content: "שלום, ההודעה הזו נוצרת אוטומטית לצורך בדיקות",
    }).save();

    const chat = await new ChatModel({
      members: [me.id, mam.id],
      messages: [msg1.id],
    }).save();

    res.send("data has seeded successfully");
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default seed;
