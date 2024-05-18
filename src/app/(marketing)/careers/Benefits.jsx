'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../../styles/clampBuilder';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { X4Grid } from '../../../../components/ui/4x4Grid';

const BenefitContainer = styled.li`
  display: grid;

  grid-template-columns: auto 1fr;

  column-gap: ${() => ClampComponent(320, 1200, 1, 1.5)};
  row-gap: ${() => ClampComponent(320, 1200, 1.5, 2.5)};

  grid-template-rows: auto 1fr;

  box-shadow: var(--box-shadow-dark);

  padding: ${() => ClampComponent(320, 1200, 2, 2.5)};

  border-radius: 2rem / 4rem;

  & > svg {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & > h4 {
    grid-column: 2 / -1;

    font-size: ${() => ClampComponent(320, 1200, 1.2, 2)};

    color: var(--text-color);
  }

  & > p {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
`;

function Benefits() {
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Benefits" withoutGradient="Our">
        At YourBank, we value our employees and are dedicated to their
        well-being and success. We offer a comprehensive range of benefits{' '}
        <br /> designed to support their personal and professional growth.
      </HeadingTextContainer>

      <X4Grid>
        <BenefitContainer></BenefitContainer>
      </X4Grid>
    </SectionContainer>
  );
}

export default Benefits;
