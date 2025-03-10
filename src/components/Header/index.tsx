'use client';

import React, { useEffect, useRef, useState } from 'react';

import { HeaderContainer } from './styles';
import HamburgerButton from './components/HamburgerButton';
import WhitepaceLogo from '../WhitepaceLogo';
import MobileMenu from './components/MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.clientHeight);
      console.log(headerHeight);
    }
  }, [isOpen, headerHeight]);

  return (
    <HeaderContainer ref={ref}>
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <MobileMenu headerHeight={headerHeight} /> : <WhitepaceLogo />}
    </HeaderContainer>
  );
};

export default Header;
