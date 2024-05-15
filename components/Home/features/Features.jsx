'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import { HeadingWrapper } from '../products/HeadingWrapper';
import { TextGradient } from '../../ui/TextGradient';
import { H2 } from '../../ui/H2';
import { Text } from '../../ui/Text';

const SectionContainer = styled.section`
  display: grid;

  grid-template-columns: auto 1fr;

  gap: ${() => ClampComponent(920, 1200, 2, 3.5)};
`;

const SideBar = styled.aside`
  background-color: var(--card-color);

  display: flex;
  flex-flow: column;
  gap: ${() => ClampComponent(920, 1200, 1.5, 3)};
  padding: ${() => ClampComponent(920, 1200, 2.4, 4)};
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

const SideNav = styled.li`
  padding: 0.8rem 1.2rem;

  color: var(--text-color);

  transition: all 350ms ease-out;

  &:hover,
  .active {
    background-image: var(--primary-gradient);

    background-clip: text;

    -webkit-background-clip: text;

    color: transparent;

    background-color: var(--black-color);
  }
`;

const FeatureContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(920, 1200, 2.5, 4)};
`;

const FeatureCard = styled.li`
  display: grid;

  grid-template-columns: 1fr auto;

  gap: ${() => ClampComponent(920, 1200, 2, 3.5)};
`;

function Features() {
  return (
    <SectionContainer>
      <HeadingWrapper>
        <H2>
          {' '}
          Our
          <TextGradient> Features </TextGradient>
        </H2>

        <Text color="dark">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all <br />
          designed to enhance your banking experience
        </Text>
      </HeadingWrapper>
    </SectionContainer>
  );
}

export default Features;
