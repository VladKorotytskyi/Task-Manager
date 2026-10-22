import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
`;

export const UserBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #475569;
`;