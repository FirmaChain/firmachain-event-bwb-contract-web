import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LogoFirma = styled.div`
  width: 16rem;
  height: 3rem;
  background-image: url('/images/firma_chain_title.svg');
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(100%) brightness(0%);
`;

export const Collaboration = styled.div`
  width: 4rem;
  height: 4.5rem;
  line-height: 4.5rem;
  font-size: 1.4rem;
  color: #000;
`;

export const LogoDonue = styled.div`
  width: 10rem;
  height: 2.2rem;
  background-image: url('/images/logo_donue.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 0.2rem;
`;
