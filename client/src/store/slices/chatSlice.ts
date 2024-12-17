import { createSlice } from "@reduxjs/toolkit";
import { chatState, DataStatus } from "../../types/redux";

const initialState: chatState = {
  error: null,
  status: DataStatus.IDLE,
  chat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
});

export default chatSlice;
