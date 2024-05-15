import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const H2 = styled.h2`
  font-size: ${() => ClampComponent(320, 1200, 2, 3)};

  font-weight: 500;
`;
