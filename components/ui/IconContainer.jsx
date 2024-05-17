import styled, { css } from 'styled-components';

export const IconContainer = styled.span`
  background-image: var(--primary-gradient);

  height: 3.5rem;

  width: 3.5rem;

  margin-right: 1rem;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.type === 'sm' &&
    css`
      height: 3rem;

      width: 3rem;
    `}
`;
