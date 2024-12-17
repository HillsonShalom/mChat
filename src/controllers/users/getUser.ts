import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import UserModel, { userDocument } from "../../types/schemas/userSchema";
import populatedUser from "../../types/queries/populatedUser";
import { userDTO } from "../../types/DTOs/usersDTOs";

const getUser = async (req: Request, res: Response) => {
  try {
    const user = req.user as userDocument;

    const query = (await UserModel.findById(user.id)
      .select("-password -_id")
      .populate({
        path: "chats",
        select: "-messages",
        populate: [
          { path: "members", select: "-password -chats" },
          { path: "group", select: "name photoUrl -_id" },
        ],
      })
      .exec()) as unknown as populatedUser;

    if (!query) throw new AppResError(404, "user not found!");

    const dto: userDTO = {
      id: user.id,
      username: query.username,
      photoUrl: query.photoUrl,
      chats: query.chats.map((c) => {
        return {
          id: c._id,
          name: c.group
            ? c.group.name
            : c.members.find((m) => m._id != user.id)!.username,
          photoUrl: c.group
            ? c.group.photoUrl
            : c.members.find((m) => m._id != user.id)!.photoUrl,
        };
      }),
    };

    res.status(200).json(dto);
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default getUser;
