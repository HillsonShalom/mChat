import exp from "express";
import cors from "cors";
import http from 'http'
import dotenv from "dotenv";
import dbConnect from "./dbconfig/dbConnection";
import usersRouter from "./routes/usersRouter";
import chatsRouter from "./routes/usersRouter";
import { Server } from "socket.io";
import SocketRouter from "./socket/socketRouter";

console.log(process.env.NODE_ENV);
const envConfig = dotenv.config({
  path: process.env.NODE_ENV === "prd" ? "./.env" : "./.env.dev",
});
type env = { parsed: { PORT: string, DB_URI: string, NODE_ENV: string } }
export const AppEnv = (envConfig as env).parsed;

const PORT = AppEnv.PORT;

dbConnect();

const app = exp();
app.use(cors());
app.use(exp.json());
app.use(exp.static("client/dist"));

app.use("/api/users", usersRouter);
app.use("/api/chats", chatsRouter);

// server
const server = http.createServer(app);
// socket
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: '*'
  }
})
const socketRouter = new SocketRouter(io);
io.on("connection", socketRouter.connection);

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
