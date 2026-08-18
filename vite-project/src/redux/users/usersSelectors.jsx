import { createSelector } from "@reduxjs/toolkit";

export const selectUsersState = (state) => state.users;
export const selectUsers = (state) => state.users?.items || [];
export const selectUsersIsLoading = (state) => state.users?.isLoading || false;
export const selectUsersError = (state) => state.users?.error || null;

export const selectUserById = createSelector(
  [selectUsers, (_, userId) => userId],
  (users, userId) => users.find((user) => user.id === userId) || null
);