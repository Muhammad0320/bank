// 'use client'

import styled, { css, keyframes } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Button = styled.button`
  display: flex;

  justify-content: center;

  align-items: center;

  background-color: var(--primary-color);

  background-image: var(--color-gradient-dark);

  border-radius: 3.6rem;

  color: var(--black-color);

  font-size: ${() => ClampComponent(320, 1200, 1.2, 2)};

  ${props =>
    props.kind === 'null' &&
    css`
      background-image: none;

      background-color: transparent;

      color: var(--text-color);
    `}

  padding-inline: ${() => ClampComponent(950, 1200, 1.2, 1.7)};
  padding-block: ${() => ClampComponent(950, 1200, 1.1, 1.5)};

  transition: background-color 1s ease-in;

  &:hover {
    --saturation: 60%;

    background-color: hsl(var(--hue) var(--saturation) var(--lightness));

    /* background-image: var(--color-gradient-dark-1); */
  }
`;
