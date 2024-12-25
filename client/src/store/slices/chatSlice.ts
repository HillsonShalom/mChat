import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { chatState, DataStatus } from "../../types/redux";
import fetchChatById from "../reducers/chatReducer";
import { chatDTO } from "../../types/DTOs/chatsDTOs";

const initialState: chatState = {
  error: null,
  status: DataStatus.IDLE,
  chat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<chatState>) => {
    builder
      .addCase(fetchChatById.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.chat = null;
      })
      .addCase(fetchChatById.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.chat = action.payload as unknown as chatDTO;
      })
      .addCase(fetchChatById.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.chat = null;
      });
  }
});

export default chatSlice;
