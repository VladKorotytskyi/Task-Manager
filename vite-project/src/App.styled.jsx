import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8fafc;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContent = styled.main`
  flex: 1;
`;

export const TasksPageContainer = styled.div`
  padding: 24px;
`;

export const TasksPageTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  color: #1e293b;
`;