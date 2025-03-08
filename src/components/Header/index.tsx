'use client';

import React, { useState } from 'react';

import { HeaderContainer } from './styles';
import HamburgerButton from './components/HamburgerButton';
import WhitepaceLogo from '../WhitepaceLogo';
import MobileMenu from './components/MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderContainer>
      {isOpen ? <MobileMenu /> : <WhitepaceLogo />}
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderContainer>
  );
};

export default Header;
