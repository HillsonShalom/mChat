import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux";
import fetchProfile from "../reducers/userReducer";
import { userDTO } from "../../types/DTOs/usersDTOs";

const initialState: userState = {
  error: null,
  status: DataStatus.IDLE,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.user = action.payload as unknown as userDTO;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.user = null;
      });
  }
});

export default userSlice;
