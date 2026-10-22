import { createSelector } from "@reduxjs/toolkit";
import { projectsAdapter } from "./projectsSlice";

export const {
  selectAll: selectAllProjects,
  selectById: selectProjectById,
  selectIds: selectProjectIds,
} = projectsAdapter.getSelectors((state) => state.projects);

export const selectProjectsStatus = (state) => state.projects.status;
export const selectProjectsError = (state) => state.projects.error;