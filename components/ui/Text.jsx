import styled, { css } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const Text = styled.p`
  color: var(--text-color);

  font-size: ${() => ClampComponent(920, 1200, 1, 1.4)};

  ${props =>
    props.type === 'head' &&
    css`
      font-size: ${() => ClampComponent(920, 1200, 1.4, 1.8)};
      font-weight: 500;
    `}

  ${props =>
    props.color === 'dark' &&
    css`
      color: var(--black-color-light);
      font-size: ${() => ClampComponent(920, 1200, 0.8, 1.2)};
    `}
`;
