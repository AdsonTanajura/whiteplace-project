import styled from 'styled-components';
import { SignInButton } from '@clerk/nextjs';

export const SignInButtonStyled = styled(SignInButton)`
  display: flex;
  background-color: #ffe492;
  border: none;
  align-items: center;
  text-align: center;
  font-size: 12px;
  padding: 8px 20px;
  border-radius: 8px;

  @media (min-width: 1024px) {
    min-height: 60px;
    max-width: 227px;
  }
`;
