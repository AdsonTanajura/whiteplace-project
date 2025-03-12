import { styled } from 'styled-components';
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #043873;
  height: 100vh;
  max-height: 56px;
  width: 100%;
  padding: 8px 16px;

  @media (min-width: 768px) {
    max-height: 66px;
    padding: 8px 32px;
  }

  @media (min-width: 1024px) {
    max-height: 92px;
  }
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const NavBar = styled.nav`
  padding: 16px;
`;

export const NavBarList = styled.ul`
  display: flex;
  gap: 32px;
  height: 100%;
  flex-wrap: wrap;
`;

export const NavBarItem = styled.li`
  gap: 10px;
`;
export const NavBarLink = styled.a`
  display: grid;
  justify-items: center;
  align-items: center;
  color: #ffffff;
  grid-template-columns: 1fr 0fr;
  column-gap: 4px;
  font-size: 14px;
`;
