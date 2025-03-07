import styled from 'styled-components';
import { VscMenu } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';

export const HamburgerButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const CloseButtom = styled(VscClose)`
  color: #ffffff;
  font-size: 42px;
`;

export const OpenButton = styled(VscMenu)`
  color: #ffffff;
  font-size: 42px;
`;
