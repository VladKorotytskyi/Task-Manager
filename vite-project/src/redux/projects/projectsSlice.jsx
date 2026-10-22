import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchProjects, addProject, deleteProject } from "./projectsThunks";

export const projectsAdapter = createEntityAdapter();

const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        projectsAdapter.setAll(state, action.payload.projects);
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        projectsAdapter.addOne(state, action.payload);
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        projectsAdapter.removeOne(state, action.payload);
      });
  },
});

export const projectsReducer = projectsSlice.reducer;
export default projectsSlice.reducer;