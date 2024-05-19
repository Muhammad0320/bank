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

  & > footer {
    grid-column: 1 / -1;
  }

  & > nav {
    grid-column: 2 / 3;
  }
`;

export const StyledMain = styled.main`
  grid-column: 2 / 3;

  display: grid;

  grid-auto-flow: row;

  row-gap: ${() => ClampComponent(320, 1200, 8, 15)};

  & > section:last-child {
    margin-block-end: ${() => ClampComponent(320, 1200, 8, 10)};
  }

  & > header {
    margin-block-start: ${() => ClampComponent(320, 1200, 8, 10)};
  }
`;
