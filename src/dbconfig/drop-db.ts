import ChatModel from "../types/schemas/chatSchema";
import MessageModel from "../types/schemas/messageSchema";
import UserModel from "../types/schemas/userSchema";
import dbConnect from "./dbConnection";

const dropDb = async () => {
  try {
    await dbConnect();

    await UserModel.collection.drop();
    await ChatModel.collection.drop();
    await MessageModel.collection.drop();

    console.log("data droped successfully");
    process.exit(0);
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

dropDb();
