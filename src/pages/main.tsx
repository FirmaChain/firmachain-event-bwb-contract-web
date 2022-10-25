import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/header';
import Footer from '../components/footer';
import LoginFade from '../components/loginFade';
import RequestQR from '../components/requestQR';

import { useTranslate } from '../utils/locale';

import {
  MainContainer,
  ContentsContainer,
  LogoWrapper,
  Collaboration,
  LogoFirma,
  LogoDonue,
  TitleText,
  SubText,
  StepWrapper,
  Step,
  DonueButton,
  NextButton,
  MainGuideTypo,
  GuideTypo,
  TimerWrapper,
  TimerTypo,
  RefreshButton,
  GuideImageWrapper,
  Guide,
  GuideImage,
  GuideText,
  GuideDivier,
} from '../styles';

interface IProps {
  setLoading: (isLoading: boolean) => void;
}

const Main = ({ setLoading }: IProps) => {
  const { t, setLanguage } = useTranslate();
  const [currentStep, setStep] = useState(0);
  const [isActiveLoginFade, setActiveLoginFade] = useState(false);
  const [signer, setSigner] = useState('');
  const [timerText, setTimerText] = useState('00:00');
  const [isRefresh, setRefresh] = useState(false);

  useEffect(() => {
    setLanguage('kr');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onClickStartButton = () => {
    setStep(1);
  };

  const sendContract = async (address: string) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_HOST}/contracts`, {
        name: t('userName'),
        address,
        phone: process.env.REACT_APP_PHONE,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const requestQRCallback = (result: any) => {
    setLoading(true);
    setSigner(result.signer);
    sendContract(result.signer)
      .then(() => {
        setLoading(false);
        setActiveLoginFade(true);
        setTimeout(() => {
          setActiveLoginFade(false);
          setStep(2);
        }, 3000);
      })
      .catch((error) => {});
  };

  const refreshQR = () => {
    setRefresh(true);
  };

  const onClickHome = () => {
    window.location.reload();
  };

  return (
    <MainContainer>
      <LoginFade text1={`${signer} ${t('loginText1')}`} text2={t('loginText2')} isActive={isActiveLoginFade} />
      <Header isActive={currentStep > 0} />
      <ContentsContainer>
        <StepWrapper currentStep={currentStep}>
          <Step>
            <LogoWrapper>
              <LogoFirma />
              <Collaboration>X</Collaboration>
              <LogoDonue />
            </LogoWrapper>
            <TitleText>{t('step1Title')}</TitleText>
            <SubText>{t('step1SubTitle')}</SubText>
            <DonueButton isActive={true} onClick={onClickStartButton}>
              <img src='/images/logo_donue_button.png' height={50} alt='button-logo' />
              <div>{t('contractButtonText')}</div>
            </DonueButton>
            <MainGuideTypo>{t('step1GuideTypo')}</MainGuideTypo>
          </Step>
          <Step>
            <GuideTypo>{t('step2GuideTypo')}</GuideTypo>
            <RequestQR
              requestType='login'
              t={t}
              setLoading={() => {}}
              isActive={currentStep === 1}
              setActive={() => {}}
              isRefresh={isRefresh}
              setRefresh={setRefresh}
              setTimerText={setTimerText}
              callback={requestQRCallback}
              qrSize={200}
            />
            <TimerWrapper onClick={refreshQR}>
              <TimerTypo>{timerText}</TimerTypo>
              <RefreshButton />
            </TimerWrapper>
          </Step>
          <Step>
            <GuideTypo style={{ fontSize: '4rem' }}>직원의 안내에 따라 다음과 같이 진행해주세요.</GuideTypo>
            <GuideImageWrapper>
              <Guide>
                <GuideImage src='/images/guide1.png' />
                <GuideText>[서명하기] 버튼 터치</GuideText>
              </Guide>
              <GuideDivier>{'>'}</GuideDivier>
              <Guide>
                <GuideImage src='/images/guide2.png' />
                <GuideText>서명 후 [서명 완료] 버튼 클릭</GuideText>
              </Guide>
              <GuideDivier>{'>'}</GuideDivier>
              <Guide>
                <GuideImage src='/images/guide3.png' />
                <GuideText>계약 체결 후 NFT 등록</GuideText>
              </Guide>
            </GuideImageWrapper>
            <NextButton isActive={true} onClick={onClickHome}>
              {t('homeButtonText')}
            </NextButton>
          </Step>
        </StepWrapper>
      </ContentsContainer>
      <Footer isActive={currentStep === 1} />
    </MainContainer>
  );
};

export default Main;
