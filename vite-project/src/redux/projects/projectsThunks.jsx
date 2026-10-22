import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { normalize, schema } from "normalizr";

axios.defaults.baseURL = "https://6a7df73df8b2ed99ca4f03ae.mockapi.io";

const taskSchema = new schema.Entity("tasks");
const projectSchema = new schema.Entity("projects", {
  tasks: [taskSchema],
});

export const fetchProjects = createAsyncThunk(
  "projects/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/projects");
      const normalizedData = normalize(response.data, [projectSchema]);
      return {
        projects: normalizedData.entities.projects || {},
        tasks: normalizedData.entities.tasks || {},
      };
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