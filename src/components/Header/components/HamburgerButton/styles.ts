import styled from 'styled-components';

export const HamburgerButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;

  svg {
    color: #ffffff;
    font-size: 42px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
