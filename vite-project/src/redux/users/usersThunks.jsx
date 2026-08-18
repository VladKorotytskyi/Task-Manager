import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6a7df73df8b2ed99ca4f03ae.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users", newUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    try {
      await axios.delete(`/users/${userId}`);
      return userId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);