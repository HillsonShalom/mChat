import { connect } from "mongoose"
import { AppEnv } from "../app";


const dbConnect = async () => {
    try {
        const connectionString = AppEnv.DB_URI

        const connection = await connect(connectionString!);
        console.log(`Successfully connected to MongoDB ${AppEnv.NODE_ENV === 'prd' ? 'Atlas' : 'localy'}`);
    } catch(err) {
        console.error((err as Error).message);
        throw err;
    }
}

export default dbConnect;