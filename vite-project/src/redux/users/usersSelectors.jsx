import { createSelector } from "@reduxjs/toolkit";
import { usersAdapter } from "./usersSlice";

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => state.users);

export const selectUsersStatus = (state) => state.users.status;
export const selectUsersError = (state) => state.users.error;