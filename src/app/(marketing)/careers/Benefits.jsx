'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../../styles/clampBuilder';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';

const BenefitContainer = styled.li`
  display: grid;

  grid-template-columns: auto 1fr;

  column-gap: ${() => ClampComponent(320, 1200, 1, 1.5)};
  row-gap: ${() => ClampComponent(320, 1200, 1.5, 2.5)};

  grid-template-rows: auto 1fr;

  box-shadow: var(--box-shadow-dark);

  padding: ${() => ClampComponent(320, 1200, 2, 2.5)};

  border-radius: 2rem / 4rem;
`;

function Benefits() {
  return (
    <HeadingTextContainer withGradient="Benefits" withoutGradient="Our">
      At YourBank, we value our employees and are dedicated to their well-being
      and success. We offer a comprehensive range of benefits <br /> designed to
      support their personal and professional growth.
    </HeadingTextContainer>
  );
}

export default Benefits;
