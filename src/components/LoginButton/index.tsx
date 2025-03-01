import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { SignInButtonStyled } from './styles';

const LoginButton = () => {
  return (
    <>
      <SignedOut>
        <SignInButtonStyled>Login</SignInButtonStyled>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default LoginButton;
