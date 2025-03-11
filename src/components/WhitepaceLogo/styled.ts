import styled from 'styled-components';
import Logo from '../../../public/logo.svg';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  width: 134px;
  height: 24px;

  @media (min-width: 768px) {
    width: 191px;
    height: 34px;
  }
`;
