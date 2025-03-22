import styled, { keyframes } from 'styled-components';

export const Loader = () => {
  return <StyledLoader />;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;
const StyledLoader = styled.div`
  margin: auto;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  border: 5px solid gray;
  border-radius: 50%;
  border-left-color: transparent;
  animation: ${rotate} 1s infinite;
`;
