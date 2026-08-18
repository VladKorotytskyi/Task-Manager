import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects, addProject as addProjectThunk } from "./projectsThunks";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.items = state.items.filter(
        (project) => project.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addProjectThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { addProject, deleteProject } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
export default projectsSlice.reducer;