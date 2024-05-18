'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../../styles/clampBuilder';
import { TextGradient } from '../../../../components/ui/TextGradient';
import { Text } from '../../../../components/ui/Text';
import Image from 'next/image';

const HeroContainer = styled.header`
  background-color: var(--card-color);

  padding: ${() => ClampComponent(920, 1200, 1.5, 3)};

  display: grid;

  grid-template-columns: 1fr 20rem 1.2fr;

  border-radius: 1.4rem;
`;

const HeroTextContainer = styled.div`
  height: fit-content;

  grid-column: 1 / 3;

  border-radius: 1.4rem 0 1.4rem 5rem;

  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 1, 2.5)};

  padding-inline: ${() => ClampComponent(920, 1200, 2, 3)};
  padding-block: ${() => ClampComponent(920, 1200, 2.5, 4)};

  color: var(--text-color);

  & > h1 {
    font-weight: 650;

    font-size: ${() => ClampComponent(920, 1200, 2.5, 4)};

    word-spacing: 1px;
  }
`;

const ImageContainer = styled.div`
  grid-column: 2 / -1;
  border-radius: inherit;
  max-width: 100%;

  overflow: hidden;
`;

function CarreerHero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <h1>
          Welcome to <TextGradient> YourBank </TextGradient> Careers!
        </h1>

        <Text>
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </Text>
      </HeroTextContainer>

      <ImageContainer>
        <Image
          src="/public/assets/images/career.png"
          fill
          alt="Carrer header hero"
        />
      </ImageContainer>
    </HeroContainer>
  );
}

export default CarreerHero;
