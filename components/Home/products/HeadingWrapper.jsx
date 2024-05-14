import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';

export const HeadingWrapper = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 1, 2)};
`;
