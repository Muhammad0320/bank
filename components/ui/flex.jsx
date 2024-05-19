import styled, { css } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const SmallFlex = styled.ul`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 0.8, 1.2)};

  align-items: center;
`;

export const TinyFlex = styled.li`
  display: flex;

  gap: ${() => ClampComponent(920, 1200, 0.3, 0.6)};

  justify-content: center;

  align-items: center;
`;

export const NormalFlex = styled.ul`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 1.5, 2.5)};

  align-items: center;

  ${props =>
    props.type === 'container' &&
    css`
      & > * {
        flex: 1;

        min-width: fit-content;

        padding: 1rem;

        justify-content: center;

        background-color: var(--black-color);

        border: 1px solid var(--black-color-light);

        border-radius: 3.6rem;
      }
    `}
`;
