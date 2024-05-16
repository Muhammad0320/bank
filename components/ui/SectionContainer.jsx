import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
`;
