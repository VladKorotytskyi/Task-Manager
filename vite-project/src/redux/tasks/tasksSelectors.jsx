import { createSelector } from "@reduxjs/toolkit";
import { selectProjects, selectProjectById } from "../projects/projectsSelectors";

export const selectAllTasks = createSelector(
  [selectProjects],
  (projects) => (projects || []).flatMap((project) => project.tasks || [])
);

export const selectTasksByProjectId = createSelector(
  [selectProjectById],
  (project) => (project?.tasks ? project.tasks : [])
);

export const selectTaskById = createSelector(
  [selectProjectById, (_, __, taskId) => taskId],
  (project, taskId) => {
    if (!project || !project.tasks) return null;
    return project.tasks.find((task) => task.id === taskId) || null;
  }
);

export const selectTasksByStatus = createSelector(
  [selectTasksByProjectId, (_, __, status) => status],
  (tasks, status) => (tasks || []).filter((task) => task.status === status)
);

export const selectTasksByUserId = createSelector(
  [selectAllTasks, (_, userId) => userId],
  (tasks, userId) => (tasks || []).filter((task) => task.userId === userId)
);