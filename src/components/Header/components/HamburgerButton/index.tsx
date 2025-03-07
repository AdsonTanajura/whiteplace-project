import React from 'react';
import { CloseButtom, HamburgerButtonContainer, OpenButton } from './styles';
import { HamburgerButtonProps } from './types';

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerButtonProps) => {
  return (
    <HamburgerButtonContainer>
      {isOpen ? (
        <>
          <CloseButtom
            data-testid="hamburger-button-close"
            onClick={() => setIsOpen(false)}
          />
        </>
      ) : (
        <OpenButton
          data-testid="hamburger-button-open"
          onClick={() => setIsOpen(true)}
        />
      )}
    </HamburgerButtonContainer>
  );
};

export default HamburgerButton;
