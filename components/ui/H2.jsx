import styled, { css } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const H2 = styled.h2`
  ${props =>
    props.type === 'small' &&
    css`
      font-size: ${() => ClampComponent(320, 1200, 1.5, 2.5)};
    `}

  font-weight: 500;
`;
