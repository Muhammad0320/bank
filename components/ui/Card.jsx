import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Card = styled.li`
  display: grid;

  grid-template-columns: auto 1fr;

  column-gap: ${() => ClampComponent(320, 1200, 1, 1.5)};
  row-gap: ${() => ClampComponent(320, 1200, 1, 2)};

  grid-template-rows: auto 1fr;

  box-shadow: var(--box-shadow-light);

  padding: ${() => ClampComponent(320, 1200, 2, 2.5)};

  border-radius: 5rem 2rem;

  & > svg {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & > h4 {
    align-self: center;

    grid-column: 2 / -1;

    font-size: ${() => ClampComponent(320, 1200, 1.2, 2)};

    color: var(--text-color);
  }

  & > p {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
`;
