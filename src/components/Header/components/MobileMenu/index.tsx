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

type MobileMenuProps = {
  headerHeight?: number;
};

const MobileMenu = ({ headerHeight }: MobileMenuProps) => {
  return (
    <MobileMenuContainer>
      <FirstColumn>
        <LoginButton />
        <RegisterButtom>Try Whitepace free</RegisterButtom>
      </FirstColumn>
      <MenuContainer headerHeight={headerHeight}>
        <MobileNavBar>
          <MobileNavBarList>
            <MobileNavBarItem>
              <MobileNavBarLink>
                Products <IoIosArrowDown />{' '}
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
