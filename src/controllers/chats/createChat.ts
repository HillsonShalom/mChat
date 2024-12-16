import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import { createChat } from "../../types/DTOs/chatsDTOs";
import UserModel, { userDocument } from "../../types/schemas/userSchema";
import ChatModel from "../../types/schemas/chatSchema";

const createChat = async (
  req: Request<any, any, createChat>,
  res: Response
) => {
  try {
    const user = req.user as userDocument;
    const { partnerId } = req.body;
    const partner = await UserModel.findById(partnerId);
    if (!partner) throw new AppResError(404, "the partner doesn't exist");

    const alreadyExists = await ChatModel.findOne({
      members: { $all: [user.id, partner.id], $size: 2 },
      group: { $exists: false },
    });

    if (alreadyExists) {
      res
        .status(200)
        .json({
          id: alreadyExists.id,
          name: partner.username,
          photoUrl: partner.photoUrl,
        });
    } else {
      const chat = await new ChatModel({
        members: [user.id, partner.id],
      }).save();

      user.chats.push(chat.id);
      partner.chats.push(chat.id);
      await user.save();
      await partner.save();

      res
        .status(201)
        .json({
          id: chat.id,
          name: partner.username,
          photoUrl: partner.photoUrl,
        });
    }
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default createChat;
