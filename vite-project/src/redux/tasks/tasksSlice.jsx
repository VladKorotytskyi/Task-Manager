import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchTasks, addTask, updateTask, deleteTask } from "./tasksThunks";
import { fetchProjects } from "../projects/projectsThunks";

export const tasksAdapter = createEntityAdapter();

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState({
    status: "idle",
    error: null,
    filterSearch: "",
    filterStatus: "all",
    filterPriority: "all",
    filterProject: "all",
    filterUser: "all",
  }),
  reducers: {
    setFilterSearch(state, action) {
      state.filterSearch = action.payload;
    },
    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
    setFilterPriority(state, action) {
      state.filterPriority = action.payload;
    },
    setFilterProject(state, action) {
      state.filterProject = action.payload;
    },
    setFilterUser(state, action) {
      state.filterUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => {
        tasksAdapter.setAll(state, action.payload.tasks);
      })
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        tasksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        tasksAdapter.addOne(state, action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        tasksAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        tasksAdapter.removeOne(state, action.payload);
      });
  },
});

export const {
  setFilterSearch,
  setFilterStatus,
  setFilterPriority,
  setFilterProject,
  setFilterUser,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
export default tasksSlice.reducer;