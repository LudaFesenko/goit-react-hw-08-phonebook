import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  gap: 16px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 8px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  background-color: #475fe1;
  cursor: pointer;
`;
