import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6a7df73df8b2ed99ca4f03ae.mockapi.io";

export const fetchProjects = createAsyncThunk(
  "projects/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/projects");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProject = createAsyncThunk(
  "projects/addProject",
  async (newProject, thunkAPI) => {
    try {
      const response = await axios.post("/projects", {
        ...newProject,
        tasks: [],
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (projectId, thunkAPI) => {
    try {
      await axios.delete(`/projects/${projectId}`);
      return projectId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);