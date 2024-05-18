import styled from 'styled-components';

export const AbstractContainer = styled.div`
  position: absolute;

  inset: 0;

  ${props =>
    props.position === 'alt' &&
    css`
      inset: unset;
      right: 0;
      transform: rotateY(190deg);
    `}
`;
