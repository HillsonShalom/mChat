import { Request, Response } from "express";
import AppResError from "../../types/extensions/appResError";
import { registerDTO } from "../../types/DTOs/usersDTOs";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from "../../types/schemas/userSchema";
import { AppEnv } from "../../app";

const register = async (req: Request<any, any, registerDTO>, res: Response) => {
  try {
    const {username, password} = req.body;
    if (!username || !password) throw new AppResError(400, "complete all fields!");
    const newUser = await (new UserModel({ username, password: await bcrypt.hash(password, 5)})).save();

    const token = jwt.sign({ user: newUser._id}, AppEnv.SECRET_KEY, { expiresIn: '30d' });

    res.status(201).json({ id: newUser._id, username, token});
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default register;
