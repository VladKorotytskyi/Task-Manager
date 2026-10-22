import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  width: 220px;
  background-color: #1e293b;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  min-height: calc(100vh - 60px);
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background-color: #334155;
  }

  &.active {
    color: #ffffff;
    background-color: #2563eb;
  }
`;