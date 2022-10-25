import React from 'react';
import { FooterContainer, Wrapper, LogoFirma, Collaboration, LogoDonue } from './styles';

interface IProps {
  isActive: boolean;
}

const Footer = ({ isActive }: IProps) => {
  return (
    <FooterContainer>
      {isActive && (
        <Wrapper>
          <LogoFirma />
          <Collaboration>X</Collaboration>
          <LogoDonue />
        </Wrapper>
      )}
    </FooterContainer>
  );
};

export default React.memo(Footer);
