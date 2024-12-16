import exp from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./dbconfig/dbConnection";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

dbConnect();

const app = exp();
app.use(cors());
app.use(exp.json());

app.get("/", (q, s) => {
  s.send("hello mchat");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
