'use client';

import React, { useState } from 'react';

import { HeaderContainer, LogoContainer } from './styles';
import HamburgerButton from './components/HamburgerButton';
import Logo from '../../../public/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      {isOpen ? null : (
        <LogoContainer>
          <Logo width={134} height={24} />
        </LogoContainer>
      )}

      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderContainer>
  );
};

export default Header;
