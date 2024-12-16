import { connect } from "mongoose"
import UserModel from "../types/schemas/userSchema";
import MessageModel from "../types/schemas/messageSchema";
import ChatModel from "../types/schemas/chatSchema";
import seed from "./seed";

const connectionString = process.env.DB_URI

const dbConnect = async () => {
    try {
        const connection = await connect(connectionString!);
        console.log("Successfully connected to mongo atlas");

        if (!(await UserModel.countDocuments()) && !(await MessageModel.countDocuments()) && !(await ChatModel.countDocuments())){
            await seed()
            console.log("data seeded");
        }
    } catch(err) {
        console.error((err as Error).message);
        throw err;
    }
}

export default dbConnect;