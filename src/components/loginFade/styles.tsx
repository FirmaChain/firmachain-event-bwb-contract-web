import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LoginWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100.5vh;
  background-color: #1b1c22ee;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const LoginTextWrapper = styled.div`
  diplay: flex;
  height: 14rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 500;
    color: #eee;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }

  & > div:nth-child(2) {
    margin-top: 4rem;
  }
`;

export const LoginText = styled.div<{ active: boolean }>`
  ${(props) => (props.active ? `` : `display:none`)}
`;
