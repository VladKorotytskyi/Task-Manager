import React from "react";
import * as S from "./Header.styled";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Title>Task Manager</S.Title>
      <S.UserBadge>
        <span>Workspace: Active</span>
      </S.UserBadge>
    </S.HeaderContainer>
  );
};