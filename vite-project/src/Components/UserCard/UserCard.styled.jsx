import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h2`
  margin: 0 0 4px 0;
  font-size: 18px;
  color: #0f172a;
`;

export const Email = styled.p`
  margin: 0 0 8px 0;
  color: #64748b;
  font-size: 14px;
`;