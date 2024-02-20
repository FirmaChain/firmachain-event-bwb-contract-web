import React from 'react';
import { HeaderContainer, Wrapper, Exit } from './styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
}

const Header = ({ isActive, setStep }: IProps) => {
  return (
    <HeaderContainer>
      {isActive && (
        <Wrapper>
          <Exit onClick={() => setStep(0)} />
        </Wrapper>
      )}
    </HeaderContainer>
  );
};

export default React.memo(Header);
