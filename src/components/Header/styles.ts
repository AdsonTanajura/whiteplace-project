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
  }

  @media (min-width: 1152px) {
    max-height: 92px;
  }
`;
