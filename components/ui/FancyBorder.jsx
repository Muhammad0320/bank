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

  border-radius: 1.4rem;

  &::before,
  &::after {
    content: '';
    position: absolute;

    inset: -0.2rem;

    z-index: -1;

    border-radius: inherit;

    background: conic-gradient(
      from var(--gradient-angle),
      #294102,
      #70e000,
      #38b000,
      #70e000,
      #294102
    );

    animation: 30s ${rotation} linear infinite;
  }

  &::after {
    filter: blur(5px);
  }
`;
