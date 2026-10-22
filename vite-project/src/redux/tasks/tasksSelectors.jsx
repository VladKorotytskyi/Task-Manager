import { createSelector } from "@reduxjs/toolkit";
import { tasksAdapter } from "./tasksSlice";
import { usersAdapter } from "../users/usersSlice";
import { projectsAdapter } from "../projects/projectsSlice";

const selectUsersEntities = (state) => state.users.entities;
const selectProjectsEntities = (state) => state.projects.entities;

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
} = tasksAdapter.getSelectors((state) => state.tasks);

export const selectTasksStatus = (state) => state.tasks.status;
export const selectTasksError = (state) => state.tasks.error;

export const selectFilterSearch = (state) => state.tasks.filterSearch;
export const selectFilterStatus = (state) => state.tasks.filterStatus;
export const selectFilterPriority = (state) => state.tasks.filterPriority;
export const selectFilterProject = (state) => state.tasks.filterProject;
export const selectFilterUser = (state) => state.tasks.filterUser;

const getId = (val) => (Array.isArray(val) ? val[0] : val);

export const selectTasksWithUsersAndProjects = createSelector(
  [selectAllTasks, selectUsersEntities, selectProjectsEntities],
  (tasks, userEntities, projectEntities) =>
    tasks.map((task) => {
      const uId = getId(task.userId);
      const pId = getId(task.projectId);

      return {
        ...task,
        userId: uId,
        projectId: pId,
        user: userEntities[uId] || null,
        project: projectEntities[pId] || null,
      };
    })
);

export const selectFilteredTasks = createSelector(
  [
    selectTasksWithUsersAndProjects,
    selectFilterSearch,
    selectFilterStatus,
    selectFilterPriority,
    selectFilterProject,
    selectFilterUser,
  ],
  (tasks, search, status, priority, projectId, userId) => {
    const searchLower = search.trim().toLowerCase();

    return tasks.filter((task) => {
      if (status !== "all" && task.status !== status) return false;
      if (priority !== "all" && task.priority !== priority) return false;
      if (projectId !== "all" && String(task.projectId) !== String(projectId)) return false;
      if (userId !== "all" && String(task.userId) !== String(userId)) return false;

      if (searchLower) {
        const titleMatch = task.title?.toLowerCase().includes(searchLower);
        const descMatch = task.description?.toLowerCase().includes(searchLower);
        if (!titleMatch && !descMatch) return false;
      }

      return true;
    });
  }
);

export const selectTasksByProjectId = createSelector(
  [selectAllTasks, (_, projectId) => projectId],
  (tasks, projectId) =>
    tasks.filter((t) => String(getId(t.projectId)) === String(projectId))
);

export const selectTasksByUserId = createSelector(
  [selectAllTasks, (_, userId) => userId],
  (tasks, userId) =>
    tasks.filter((t) => String(getId(t.userId)) === String(userId))
);

export const selectDashboardStatistics = createSelector(
  [selectAllTasks, (state) => state.users.ids, (state) => state.projects.ids],
  (tasks, userIds, projectIds) => {
    let todoCount = 0;
    let inProgressCount = 0;
    let doneCount = 0;
    let highPriorityCount = 0;

const taskStats = tasks.reduce(
      (acc, task) => {
        if (task.status === "todo") acc.todoTasks++;
        else if (task.status === "in-progress") acc.inProgressTasks++;
        else if (task.status === "done" || task.status === "completed") acc.doneTasks++;
        if (task.priority === "high") acc.highPriorityTasks++;
        return acc;
      },
      { todoTasks: 0, inProgressTasks: 0, doneTasks: 0, highPriorityTasks: 0 }
    );

    return {
      totalTasks: tasks.length,
      todoTasks: todoCount,
      inProgressTasks: inProgressCount,
      doneTasks: doneCount,
      highPriorityTasks: highPriorityCount,
      totalUsers: userIds.length,
      totalProjects: projectIds.length,
    };
  }
);