import exp from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./dbconfig/dbConnection";
import usersRouter from "./routes/usersRouter";
import chatsRouter from "./routes/usersRouter";
console.log(process.env.NODE_ENV);
const envConfig = dotenv.config({
  path: process.env.NODE_ENV === "prd" ? "./.env" : "./.env.dev",
});
console.log(envConfig);
type env = { parsed: { PORT: string, DB_URI: string, NODE_ENV: string } }
export const AppEnv = (envConfig as env).parsed;

const PORT = AppEnv.PORT;

dbConnect();

const app = exp();
app.use(cors());
app.use(exp.json());
app.use(exp.static("client/dist"));

app.use("/users", usersRouter);
app.use("/chats", chatsRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
