'use client';

import styled from 'styled-components';

import { clampBuilder, ClampComponent } from './clampBuilder';

export const StyledBody = styled.body`
  display: grid;

  grid-template-columns: minmax(10rem, 1fr) 80dvw minmax(10rem, 1fr);

  @media (max-width: 920px) {
    grid-template-columns: minmax(${() => clampBuilder(320, 920, 2, 4)}, 1fr) 95dvw minmax(
        ${() => clampBuilder(320, 920, 2, 4)},
        1fr
      );
  }
`;

export const StyledMain = styled.main`
  grid-column: 2 / 3;
`;
