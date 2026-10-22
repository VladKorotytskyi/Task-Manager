import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #0f172a;
`;

export const Description = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #475569;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 12px;
`;

export const Badge = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11px;
  background-color: ${(props) =>
    props.type === "priority"
      ? props.val === "high"
        ? "#fee2e2"
        : props.val === "medium"
        ? "#fef3c7"
        : "#dcfce7"
      : "#e0f2fe"};
  color: ${(props) =>
    props.type === "priority"
      ? props.val === "high"
        ? "#991b1b"
        : props.val === "medium"
        ? "#92400e"
        : "#166534"
      : "#075985"};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "delete" ? "#ef4444" : "#3b82f6"};
  color: #ffffff;
  &:hover {
    opacity: 0.9;
  }
`;