import React from "react";
import * as S from "./SideBar.styled";

export const SideBar = () => {
  return (
    <S.SidebarContainer>
      <S.StyledNavLink to="/" end>
        Dashboard
      </S.StyledNavLink>
      <S.StyledNavLink to="/tasks">
        Tasks
      </S.StyledNavLink>
      <S.StyledNavLink to="/projects">
        Projects
      </S.StyledNavLink>
      <S.StyledNavLink to="/users">
        Users
      </S.StyledNavLink>
    </S.SidebarContainer>
  );
};