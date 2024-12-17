import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import { userDocument } from "../../types/schemas/userSchema";
import ChatModel from "../../types/schemas/chatSchema";
import populatedChat from "../../types/queries/populatedChat";
import { chatDTO } from "../../types/DTOs/chatsDTOs";

const getChat = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = req.user as userDocument;

    const chat = (await ChatModel.findById(req.params.id)
      .populate([
        { path: "members", select: "-password -chats" },
        { path: "messages" },
        { path: "group" },
      ])
      .exec()) as unknown as populatedChat;
    if (!chat) throw new AppResError(404, "chat not found!");

    const dto: chatDTO = {
      id: req.params.id,
      chatName: chat.group
        ? chat.group.name
        : chat.members.find((m) => m._id != user.id)!.username,
      isGroup: chat.group ? true : false,
      photoUrl: chat.group
        ? chat.group.photoUrl
        : chat.members.find((m) => m._id != user.id)!.photoUrl,
      members: chat.members.map((mbr) => {
        return {
          id: mbr._id,
          username: mbr.username,
          photoUrl: mbr.photoUrl,
          isAdmin: chat.group?.admins.includes(mbr._id),
        };
      }),
      messages: chat.messages.map((msg) => {
        return { ...msg, id: msg._id };
      }),
    };

    res.status(200).json(dto);
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getChat;
