import styled, { css } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const H2 = styled.h2`
  ${props =>
    props.type === 'small' &&
    css`
      font-size: ${() => ClampComponent(320, 1200, 1.5, 2.5)};
    `}
  font-size: ${() => ClampComponent(320, 1200, 2, 3)};

  font-weight: 500;
`;

export const H3 = styled.h3`
  font-size: ${() => ClampComponent(320, 1200, 2, 2.5)};

  font-weight: 500;
`;

export const H4 = styled.h4`
  font-size: ${() => ClampComponent(320, 1200, 1.5, 2)};

  font-weight: 500;
`;
