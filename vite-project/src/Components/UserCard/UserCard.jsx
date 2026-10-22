import React from "react";
import { useSelector } from "react-redux";
import { selectTasksByUserId } from "../../redux/tasks/tasksSelectors";
import * as S from "./UserCard.styled";

export const UserCard = ({ user }) => {
  const userTasks = useSelector((state) => selectTasksByUserId(state, user.id));

  return (
    <S.Card>
      {user.avatar && <S.Avatar src={user.avatar} alt={user.name} />}
      <S.Info>
        <S.Name>{user.name}</S.Name>
        <S.Email>{user.email}</S.Email>
        <div>
          <strong>Assigned tasks:</strong> {userTasks.length}
        </div>
      </S.Info>
    </S.Card>
  );
};