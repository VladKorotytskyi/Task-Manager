import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask as addTaskThunk } from "./tasksThunks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(
        (task) => task.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
export default tasksSlice.reducer;