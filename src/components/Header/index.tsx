'use client';

import React, { useEffect, useRef, useState } from 'react';

import { HeaderContainer, HeaderMenuContainer } from './styles';
import HamburgerButton from './components/HamburgerButton';
import WhitepaceLogo from '../WhitepaceLogo';
import MobileMenu from './components/MobileMenu';
import LoginButton from '../LoginButton';
import RegisterButtom from '../RegisterButtom';
import useWindowSize from '@/hooks/windowSize';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const isInDescktop = width >= 1024;

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.clientHeight);
      console.log(headerHeight);
    }
  }, [isOpen, headerHeight]);

  return (
    <HeaderContainer ref={ref}>
      <HeaderMenuContainer>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        {isInDescktop ? (
          <>
            <LoginButton />
            <RegisterButtom>Try Whitepace free</RegisterButtom>
          </>
        ) : null}
      </HeaderMenuContainer>
      {isOpen ? (
        <MobileMenu headerHeight={headerHeight} isInDescktop={isInDescktop} />
      ) : (
        <WhitepaceLogo />
      )}
    </HeaderContainer>
  );
};

export default Header;
