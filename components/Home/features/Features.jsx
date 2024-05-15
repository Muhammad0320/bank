'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import { HeadingWrapper } from '../products/HeadingWrapper';
import { TextGradient } from '../../ui/TextGradient';
import { H2 } from '../../ui/H2';
import { Text } from '../../ui/Text';

const SectionContainer = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;

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
