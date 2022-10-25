import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #faf0d6;
  padding-bottom: 1px;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const LogoFirma = styled.div`
  width: 20rem;
  height: 4rem;
  background-image: url('/images/firma_chain_title.svg');
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(100%) brightness(0%);
`;

export const Collaboration = styled.div`
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  color: #000;
`;

export const LogoDonue = styled.div`
  width: 16rem;
  height: 2.6rem;
  background-image: url('/images/logo_donue.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -0.4rem;
`;

export const TitleText = styled.div`
  font-size: 6rem;
  color: #000;
  font-weight: 600;
  margin-top: 2rem;
`;

export const SubText = styled.div`
  font-size: 2.6rem;
  color: #999;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const Button = styled.div<{ isActive: boolean }>`
  width: auto;
  min-width: 20rem;
  height: 8rem;
  margin-top: 1rem;
  padding: 0 1rem;
  line-height: 8rem;
  background-color: ${(props) => (props.isActive ? '#3550de' : '#888')};
  border-radius: 5rem;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 3.6rem;
`;

export const DonueButton = styled.div<{ isActive: boolean }>`
  width: 30rem;
  height: 7rem;
  padding: 0 1rem;
  line-height: 7rem;
  background-color: rgb(205, 0, 26);
  border-radius: 5rem;
  text-align: center;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  & > div {
    margin-right: 1.6rem;
    margin-top: -0.4rem;
  }
`;

export const NextButton = styled.div<{ isActive: boolean }>`
  width: 20rem;
  height: 5.5rem;
  margin-top: 2rem;
  padding: 0 1rem;
  line-height: 5.5rem;
  background-color: rgb(205, 0, 26);
  border-radius: 5rem;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 2.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    margin-right: 1.6rem;
  }
`;

export const StepWrapper = styled.div<{ currentStep: number }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  & > div {
    display: none;
    flex: 1;
  }
  & > div:nth-child(1) {
    height: auto !important;
  }
  & > div:nth-child(${(props) => props.currentStep + 1}) {
    display: flex;
  }
`;

export const Step = styled.div`
  display: flex;
  height: 30rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: height 0.5s linear;
`;

export const NameInput = styled.input`
  border: 0;
  padding: 0;
  margin-top: 2rem;
  width: 30rem;
  height: 8rem;
  text-align: center;
  font-size: 4rem;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #1b1c22;
  color: white;
`;

export const Divide = styled.div`
  font-size: 10rem;
  height: 12rem;
  line-height: 11rem;
  color: white;
  margin: 0 2rem;
`;

export const MainGuideTypo = styled.div`
  position: absolute;
  bottom: 5rem;
  color: #fac003;
  font-size: 2rem;
  font-weight: bold;
`;

export const GuideTypo = styled.div`
  font-size: 4.4rem;
  font-weight: bold;
  line-height: 5.8rem;
  color: #292929;
  white-space: pre-wrap;
  margin-bottom: 4rem;
  margin-top: -0.5rem;
`;

export const TimerWrapper = styled.div`
  width: 14.2rem;
  height: 4.4rem;
  border-radius: 2.2rem;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
  background-color: #404040;
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1.2rem 0;
`;

export const TimerTypo = styled.div`
  font-size: 2.4rem;
  color: white;
  margin-left: 1rem;
`;

export const RefreshButton = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('/images/ic_refresh.png');
  background-size: contain;
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(100%);
`;

export const GuideImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5rem;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;

export const Guide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const GuideImage = styled.img`
  width: 19.9rem;
  height: 43rem;
`;
export const GuideText = styled.div`
  font-size: 1.7rem;
  color: #555;
  font-weight: bold;
`;
export const GuideDivier = styled.div`
  font-size: 4rem;
  color: #aaa;
  text-align: center;
`;
