import styled from 'styled-components';

export const LoadingWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000bb;
  padding-bottom: 5px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;
