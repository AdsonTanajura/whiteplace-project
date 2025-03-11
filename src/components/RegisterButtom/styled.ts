import styled from 'styled-components';

export const RegisterButtomContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #4f9cf9;
  border: none;
  color: #fff;
  text-align: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  padding: 8px 12px;

  @media (min-width: 1024px) {
    min-height: 60px;
    max-width: 227px;
  }
`;
