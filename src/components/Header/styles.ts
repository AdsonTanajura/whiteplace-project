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
