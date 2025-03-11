import React from 'react';
import {
  FirstColumn,
  MenuContainer,
  MobileMenuContainer,
  MobileNavBar,
  MobileNavBarItem,
  MobileNavBarLink,
  MobileNavBarList,
} from './styles';
import LoginButton from '@/components/LoginButton';
import RegisterButtom from '@/components/RegisterButtom';
import { IoIosArrowDown } from 'react-icons/io';
import WhitepaceLogo from '@/components/WhitepaceLogo';

type MobileMenuProps = {
  headerHeight?: number;
  isInDescktop?: boolean;
};

const MobileMenu = ({ headerHeight, isInDescktop }: MobileMenuProps) => {
  const LogoInDescktop = isInDescktop ? <WhitepaceLogo /> : null;

  return (
    <MobileMenuContainer>
      <FirstColumn>
        <LoginButton />
        <RegisterButtom>Try Whitepace free</RegisterButtom>
      </FirstColumn>
      {LogoInDescktop}
      <MenuContainer headerHeight={headerHeight}>
        <MobileNavBar>
          <MobileNavBarList>
            <MobileNavBarItem>
              <MobileNavBarLink>
                Products <IoIosArrowDown />
              </MobileNavBarLink>
            </MobileNavBarItem>
            <MobileNavBarItem>
              <MobileNavBarLink>
                Solutions <IoIosArrowDown />
              </MobileNavBarLink>
            </MobileNavBarItem>
            <MobileNavBarItem>
              <MobileNavBarLink>
                Resources <IoIosArrowDown />
              </MobileNavBarLink>
            </MobileNavBarItem>
            <MobileNavBarItem>
              <MobileNavBarLink>
                Pricing <IoIosArrowDown />
              </MobileNavBarLink>
            </MobileNavBarItem>
          </MobileNavBarList>
        </MobileNavBar>
      </MenuContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
