import { Types } from "mongoose";

interface Token {
  user: Types.ObjectId;
}

export default Token;
