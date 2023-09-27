import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Fading = styled.div`
  animation: ${fade} 1s infinite both1;
`;
