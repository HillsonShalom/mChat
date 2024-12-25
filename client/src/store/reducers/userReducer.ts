import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProfile = createAsyncThunk('user/profile', async (_, thunkApi) => {
    try {
        const Authorization = localStorage.getItem("token");
        const res = await fetch(import.meta.env.VITE_BASE_URL + '/api/users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + Authorization
            }
        })
        if (res.status != 200) {
            return thunkApi.rejectWithValue("Error! the status code was " + res.status);
        }
        const data = await res.json()
        return thunkApi.fulfillWithValue(data);
    } catch(err) {
        return thunkApi.rejectWithValue((err as Error).message)
    }
})

export default fetchProfile