import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/usersThunks";
import { selectAllUsers, selectUsersStatus } from "../../redux/users/usersSelectors";
import { UserCard } from "../UserCard/UserCard";
import * as S from "./Users.styled";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectUsersStatus);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <S.Container>Loading users...</S.Container>;

  return (
    <S.Container>
      <S.HeaderTitle>Users</S.HeaderTitle>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </S.Container>
  );
};