'use client';

import styled from 'styled-components';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { ClampComponent } from '../../../../styles/clampBuilder';

const ValuesContainerList = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(320, 1200, 2.5, 3)};
`;

const ValuesItem = styled.li`
  --lightness: 20%;

  padding-inline: ${() => ClampComponent(320, 1200, 1.2, 1.8)};

  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(320, 1200, 2, 5)};

  border-right: 1px solid var(--primary-color);

  & > h3 {
    font-size: ${() => ClampComponent(320, 1200, 2, 3.5)};

    opacity: 0.5;
  }
`;

function Values() {
  return <SectionContainer></SectionContainer>;
}

export default Values;
