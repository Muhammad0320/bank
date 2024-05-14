import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const InlineContainer = Reactstyled.div`
  &:first-child {
    padding-inline-end: ${() => ClampComponent(320, 1200, 3, 5)};
  }

  &:nth-child(2) {
    padding-inline: ${() => ClampComponent(320, 1200, 2, 3.5)};
  }

  &:last-child {
    padding-inline: ${() => ClampComponent(320, 1200, 3, 5)};
  }

  &:not(:last-child) {
    border-right: 1px solid var(--black-color-light);
  }
`;
