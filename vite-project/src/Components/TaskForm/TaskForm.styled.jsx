import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  max-width: 600px;
  margin-bottom: 24px;
`;

export const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
  color: #0f172a;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #334155;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const SubmitButton = styled.button`
  padding: 10px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  background-color: #94a3b8;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #64748b;
  }
`;