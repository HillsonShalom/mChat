import { NextFunction, Request, Response } from "express";
import { AppEnv } from "../app";

const adminGuard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers["admin-key"] as string;
    if (!authorization) throw new Error("You can't get here!");

    if (AppEnv.ADMIN_KEY !== authorization) throw new Error("Wrong key!");

    next();
  } catch (err) {
    res.status(403).send((err as Error).message);
  }
};

export default adminGuard;
