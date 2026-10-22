import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 20px;
  color: #0f172a;
`;

export const Description = styled.p`
  margin: 0 0 16px 0;
  color: #475569;
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  padding: 8px 12px;
  background-color: #f8fafc;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f1f5f9;
`;