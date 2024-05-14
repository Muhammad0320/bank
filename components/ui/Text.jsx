import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Text = styled.p`
  color: var(--text-color);

  font-size: ${() => ClampComponent(920, 1200, 1, 1.4)};
`;
