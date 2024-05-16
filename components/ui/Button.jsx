// 'use client'

import styled, { css, keyframes } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Button = styled.button`
  display: flex;

  justify-content: center;

  align-items: center;

  background-color: hsl(var(--hue) var(--saturation) var(--lightness));

  background-image: var(--color-gradient-dark);

  border-radius: 3.6rem;

  color: var(--black-color);

  font-size: ${() => ClampComponent(320, 1200, 1.2, 2)};

  padding-inline: ${() => ClampComponent(950, 1200, 1.2, 1.7)};
  padding-block: ${() => ClampComponent(950, 1200, 1.1, 1.5)};

  transition: background-color 350ms ease-in-out;

  ${props =>
    props.kind === 'null' &&
    css`
      background-image: none;

      background-color: transparent;

      color: var(--text-color);
    `}

  ${props =>
    props.kind === 'sec' &&
    css`
      padding-inline: ${() => ClampComponent(950, 1200, 0.8, 1)};
      padding-block: ${() => ClampComponent(950, 1200, 0.4, 0.8)};

      background-color: var(--color-card);

      color: var(--text-color);
    `}

  ${props =>
    props.kind === 'ex' &&
    css`
      --lightness: 15%;

      color: var(--primary-color);
    `}





  &:hover {
    /* ---hue: 74; */
    --lightness: 75%;
    --saturation: 90%;

    /* background-color: hsl(var(--hue) var(--saturation) var(--lightness)); */

    /* background-image: var(--color-gradient-dark-muted); */
  }
`;
