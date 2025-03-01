import React from 'react';
import { CloseButtom, HamburgerButtonContainer, OpenButton } from './styles';
import LoginButton from '@/components/LoginButton';
import { HamburgerButtonProps } from './types';

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerButtonProps) => {
  return (
    <HamburgerButtonContainer>
      {isOpen ? (
        <>
          <LoginButton />
          <CloseButtom onClick={() => setIsOpen(false)} />
        </>
      ) : (
        <OpenButton onClick={() => setIsOpen(true)} />
      )}
    </HamburgerButtonContainer>
  );
};

export default HamburgerButton;
