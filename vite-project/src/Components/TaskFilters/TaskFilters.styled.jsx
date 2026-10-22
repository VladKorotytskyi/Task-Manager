import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  background-color: #f8fafc;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

export const SearchInput = styled.input`
  flex: 1 1 200px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #3b82f6;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  &:focus {
    border-color: #3b82f6;
  }
`;