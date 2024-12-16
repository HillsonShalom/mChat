import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import { createGroup } from "../../types/DTOs/chatsDTOs";
import UserModel, { userDocument } from "../../types/schemas/userSchema";
import groupModel from "../../types/schemas/groupSchema";
import ChatModel from "../../types/schemas/chatSchema";

const createGroup = async (
  req: Request<any, any, createGroup>,
  res: Response
) => {
  try {
    const user = req.user as userDocument;
    const { name, partnerId } = req.body;
    const partner = await UserModel.findById(partnerId);
    if (!partner) throw new AppResError(404, "the partner doesn't exist");
    if (!name) throw new AppResError(400, "name is mandatory");

    const group = await new groupModel({ name, admins: [user.id] }).save();
    const chat = await new ChatModel({
      members: [user.id, partner.id],
      group: group.id,
    }).save();
    user.chats.push(chat.id);
    partner.chats.push(chat.id);
    await user.save();
    await partner.save();

    res.status(201).json({id: chat.id, name})
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default createGroup;
