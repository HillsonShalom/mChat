import { connect } from "mongoose"
import UserModel from "../types/schemas/userSchema";
import MessageModel from "../types/schemas/messageSchema";
import ChatModel from "../types/schemas/chatSchema";
import seed from "./seed";
import { AppEnv } from "../app";


const dbConnect = async () => {
    try {
        const connectionString = AppEnv.DB_URI

        const connection = await connect(connectionString!);
        console.log(`Successfully connected to MongoDB ${AppEnv.NODE_ENV === 'prd' ? 'Atlas' : 'localy'}`);

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