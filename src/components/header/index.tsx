import React from 'react';
import { HeaderContainer, Wrapper } from './styles';

interface IProps {
  isActive: boolean;
}

const Header = ({ isActive }: IProps) => {
  return <HeaderContainer>{isActive && <Wrapper></Wrapper>}</HeaderContainer>;
};

export default React.memo(Header);
