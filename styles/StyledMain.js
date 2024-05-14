'use client';

import styled from 'styled-components';

import { ClampComponent } from './clampBuilder';

export const StyledBody = styled.body`
  display: grid;

  grid-template-columns: minmax(min(7rem, 100%), 1fr) 80dvw minmax(
      min(7rem, 100%),
      1fr
    );

  @media (max-width: 920px) {
    grid-template-columns: minmax(${() => ClampComponent(320, 920, 2, 4)}, 1fr) 95dvw minmax(
        ${() => ClampComponent(320, 920, 2, 4)},
        1fr
      );
  }
`;

export const StyledMain = styled.main`
  grid-column: 2 / 3;

  display: grid;

  grid-auto-flow: row;

  row-gap: 10rem;
`;
