import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  color: #1e293b;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const CardValue = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
`;