import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const X4Grid = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(320, 1200, 2.5, 3)};
`;
