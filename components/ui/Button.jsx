// 'use client'

import styled, { css, keyframes } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Button = styled.button`
  display: flex;

  justify-content: center;

  align-items: center;

  /* background-color: var(--primary-color);

  background-image: var(--color-gradient-dark); */

  background-image: var(--primary-color-t);

  border-radius: 3.6rem;

  color: var(--black-color);

  font-size: ${() => ClampComponent(320, 1200, 1.2, 2)};

  ${props =>
    props.kind === 'null' &&
    css`
      background-image: none;

      color: var(--tex-color);
    `}

  padding-inline: ${() => ClampComponent(950, 1200, 1.2, 1.7)};
  padding-block: ${() => ClampComponent(950, 1200, 1.1, 1.5)};

  transition: background-position 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-position: right;
  }
`;
