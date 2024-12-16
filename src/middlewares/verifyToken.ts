/// <reference path="../types/extensions/extensions.d.ts" />

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";
import Token from "../types/DTOs/token";
import UserModel from "../types/schemas/userSchema";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers["authorization"] as string;
    if (!authorization) throw new Error("Login first!");

    if (authorization.split(" ")[0] !== "Bearer")
      throw new Error("Wrong token!");

    const token = authorization.split(" ")[1];
    const verified = jwt.verify(token, process.env.SECRET_KEY!) as Token;

    const user = await UserModel.findById(verified.user);
    if (!user) throw new Error("Wrong token content");

    req.user = user;

    next();
  } catch (err) {
    res.status(401).send((err as Error).message);
  }
};

export default verifyToken;
