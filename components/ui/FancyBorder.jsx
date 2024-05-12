import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
    
  }
`;

export const FancyBorder = styled.div`
  position: relative;

  width: 10rem;
  height: 10rem;

  border-radius: 1.6rem;

  &::before,
  &::after {
    content: '';
    position: absolute;

    inset: -0.1rem;

    z-index: -1;

    border-radius: inherit;

    background: conic-gradient(
      from var(--gradient-angle),
      #5ee780,
      #008421,
      #25a244,
      #004612,
      #1a7431
    );

    animation: 20s ${rotation} linear infinite;
  }

  &::after {
    filter: blur(5px);
  }
`;
