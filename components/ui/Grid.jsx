import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const GridContainer = styled.ul`
  display: grid;

  /* grid-template-columns: repeat(auto-fit, minmax(min(70rem, 100%), 1fr)); */
  grid-template-columns: repeat(2, 1fr);

  /* grid-template-rows: auto; */

  gap: ${() => ClampComponent(320, 1200, 1.8, 2.5)};
`;
