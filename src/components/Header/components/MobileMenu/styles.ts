import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuContainer = styled.div.attrs<{ headerHeight?: number }>(
  ({ headerHeight }) => ({
    style: { top: `${headerHeight || 0}px` },
  })
)`
  position: absolute;
  background-color: rgb(25, 69, 120);
  display: flex;
  justify-content: center;
  border-radius: 0 0 4px 0;
  width: 50%;
  height: 300px;
  left: 0;
`;

export const MobileNavBar = styled.nav`
  padding: 16px;
`;

export const MobileNavBarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MobileNavBarItem = styled.li`
  gap: 10px;
`;
export const MobileNavBarLink = styled.a`
  display: grid;
  justify-items: center;
  align-items: center;
  color: #ffffff;
  grid-template-columns: 1fr 0fr;
  column-gap: 4px;
  font-size: 14px;
`;
