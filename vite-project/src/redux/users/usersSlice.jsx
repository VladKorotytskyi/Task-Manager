import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser as addUserThunk } from "./usersThunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addUserThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
export default usersSlice.reducer;