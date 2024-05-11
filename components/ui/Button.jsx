// 'use client'

import styled, { css, keyframes } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Button = styled.button`
  display: flex;

  justify-content: center;

  align-items: center;

  background-color: var(--primary-color)

  background-image: var(--color-gradient-dark);

  border-radius: 3.6rem;

  font-size: ${() => ClampComponent(320, 1200, 1.2, 2)};

  ${props =>
    props.kind === 'null' &&
    css`
      background-color: transparent;
    `}

  padding-inline: ${() => ClampComponent(950, 1200, 1.2, 1.7)};
  padding-block: ${() => ClampComponent(950, 1200, 1.1, 1.5)};

  transition: background-position 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-position: right;
  }
`;
