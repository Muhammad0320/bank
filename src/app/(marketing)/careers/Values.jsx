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

  border-left: 2px solid;

  border-image: linear-gradient(
      to bottom,
      var(--primary-color),
      rgba(0, 0, 0, 0)
    )
    1 100%;

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
        integrity, <br /> delivering exceptional service, and embracing
        innovation. These values define our culture and shape the way we work
        together to achieve our goals.
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
        <ValuesItem>
          <h3> Collaboration </h3>
          <Text color="dark">
            We foster a collaborative and inclusive work environment, where
            teamwork and diversity are celebrated. By leveraging the unique
            strengths and perspectives of our employees, we drive innovation and
            achieve greater success together.
          </Text>
        </ValuesItem>
        <ValuesItem>
          <h3> Innovation </h3>
          <Text color="dark">
            We embrace change and constantly seek innovative solutions to meet
            the evolving needs of our customers. We encourage our employees to
            think creatively, challenge conventions, and explore new ideas to
            drive the future of banking.
          </Text>
        </ValuesItem>
      </ValuesContainerList>
    </SectionContainer>
  );
}

export default Values;
