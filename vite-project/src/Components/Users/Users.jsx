import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelector";
import { fetchUsers } from "../../redux/users/usersThunks";
import { UserCard } from "../UserCard/UserCard";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <p>Welcome to the Users page!</p>
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};