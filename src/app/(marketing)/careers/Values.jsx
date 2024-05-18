'use client';

import styled from 'styled-components';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { ClampComponent } from '../../../../styles/clampBuilder';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { Text } from '../../../../components/ui/Text';

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
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Values" withoutGradient="Our">
        At YourBank, our values form the foundation of our organization and
        guide our actions. We believe in upholding the highest standards of
        integrity, delivering exceptional service, and embracing innovation.
        These values define our culture and shape the way we work together to
        achieve our goals.
      </HeadingTextContainer>

      <ValuesContainerList>
        <ValuesItem>
          <h3> Intergrity </h3>
          <Text>
            We conduct ourselves with utmost honesty, transparency, and ethical
            behavior. We believe in doing what is right for our customers,
            colleagues, and stakeholders, even when faced with difficult
            choices.
          </Text>
        </ValuesItem>

        <ValuesItem>
          <h3> Customer Centricity </h3>
          <Text color="dark">
            Our customers are at the heart of everything we do. We are dedicated
            to understanding their needs, providing personalized solutions, and
            delivering exceptional service that exceeds expectations.
          </Text>
        </ValuesItem>
      </ValuesContainerList>
    </SectionContainer>
  );
}

export default Values;
