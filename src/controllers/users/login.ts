import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import UserModel from "../../types/schemas/userSchema";
import { loginDTO } from "../../types/DTOs/usersDTOs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppEnv } from "../../app";

const login = async (req: Request<any, any, loginDTO>, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new AppResError(400, "complete all fields!");

    const users = await UserModel.find({ username });
    if (!users.length) throw new AppResError(404, "user not found!");
    const user = users.find(
      async (u) => await bcrypt.compare(password, u.password)
    );
    if (!user) throw new AppResError(404, "wrong password!");

    const token = jwt.sign({ user: user._id }, AppEnv.SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({ id: user._id, username, token });
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default login;
