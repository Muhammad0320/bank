const { ClampComponent } = require('../../styles/clampBuilder');
import styled from 'styled-components';

export const SmallFlex = styled.ul`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 0.8, 1.2)};

  align-items: center;
`;

export const TinyFlex = styled.li`
  display: flex;

  gap: ${() => ClampComponent(920, 1200, 0.4, 0.8)};

  justify-content: center;

  align-items: center;
`;
