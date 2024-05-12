import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360%;
    
  }
`;

const FancyBorder = styled.div`
  @property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  position: relative;
  background-color: transparent;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -0.5rem;

    z-index: -1;

    border-radius: inherit;

    background: conic-gradient(
      from var(--gradient-angle),
      #1a7431,
      #208b3a,
      #25a244,
      #208b3a,
      #1a7431
    );

    animation: ${rotation} 20s linear infinite;
  }
`;
