import React from 'react';
import { RegisterButtomContainer } from './styled';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

interface RegisterButtomProps {
  children: React.ReactNode;
}

const RegisterButtom: React.FC<RegisterButtomProps> = ({ children }) => {
  return (
    <RegisterButtomContainer>
      {children}
      <HiOutlineArrowSmallRight width={'10px'} hanging={'10px'} />
    </RegisterButtomContainer>
  );
};

export default RegisterButtom;
