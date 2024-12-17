import { createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux";

const initialState: userState = {
  error: null,
  status: DataStatus.IDLE,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
