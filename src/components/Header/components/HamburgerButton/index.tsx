import React from 'react';
import { HamburgerButtonContainer } from './styles';
import { HamburgerButtonProps } from './types';
import { VscMenu } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerButtonProps) => {
  const Icon = isOpen ? VscClose : VscMenu;
  return (
    <HamburgerButtonContainer onClick={() => setIsOpen(!isOpen)}>
      <Icon data-testid={`hamburger-button-${isOpen}`} />
    </HamburgerButtonContainer>
  );
};

export default HamburgerButton;
