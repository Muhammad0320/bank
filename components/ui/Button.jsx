// 'use client'

import styled, { css } from 'styled-components';
import { clampBuilder } from '../../styles/clampBuilder';

export const Button = styled.button`
  display: flex;

  justify-content: center;

  align-items: center;

  background-color: hsl(var(--hue) var(--saturation) var(--lightness));

  border-radius: 3.6rem;

  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};

  ${props =>
    props.kind === 'null' &&
    css`
      background-color: transparent;
    `}

  padding-inline: ${() => clampBuilder(950, 1200, 1.2, 1.7)};
  padding-block: ${() => clampBuilder(950, 1200, 1.1, 1.5)};

  transition: background-color 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    --lightness: 50%;
  }
`;
