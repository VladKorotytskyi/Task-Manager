import { createSelector } from "@reduxjs/toolkit";

export const selectProjectsState = (state) => state.projects;
export const selectProjects = (state) => state.projects?.items || [];
export const selectProjectsIsLoading = (state) => state.projects?.isLoading || false;
export const selectProjectsError = (state) => state.projects?.error || null;

export const selectProjectById = createSelector(
  [selectProjects, (_, projectId) => projectId],
  (projects, projectId) => projects.find((project) => project.id === projectId) || null
);