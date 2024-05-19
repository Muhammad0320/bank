'use client';

import styled, { css } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Text = styled.p`
  color: var(--text-color);

  font-size: ${() => ClampComponent(920, 1200, 1.2, 1.5)};

  ${props =>
    props.type === 'head-lg' &&
    css`
      font-size: ${() => ClampComponent(920, 1200, 1.5, 2.2)};
      font-weight: 500;
    `}

  ${props =>
    props.type === 'head' &&
    css`
      font-size: ${() => ClampComponent(920, 1200, 1.4, 1.8)};
      font-weight: 500;
    `}


  ${props =>
    props.color === 'dark' &&
    css`
      color: var(--text-color-dark);
      font-size: ${() => ClampComponent(920, 1200, 0.8, 1.2)};
    `}
`;
