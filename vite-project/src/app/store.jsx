import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/users/usersSlice";
import projectsReducer from "../redux/projects/projectsSlice";
import tasksReducer from "../redux/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
  },
});