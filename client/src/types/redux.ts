import { chatDTO } from "./DTOs/chatsDTOs";
import { userDTO } from "./DTOs/usersDTOs";

export enum DataStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  IDLE = "IDLE",
}

interface parentState {
  error: string | null;
  status: DataStatus;
}

export interface userState extends parentState {
  user: userDTO | null;
}

export interface chatState extends parentState {
  chat: chatDTO | null;
}
