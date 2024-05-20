'use client';

import styled from 'styled-components';
import { GridContainer } from '../../../../components/ui/Grid';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { ClampComponent } from '../../../../styles/clampBuilder';
import Image from 'next/image';
import { ColumnFlex, NormalFlex } from '../../../../components/ui/flex';
import { H4 } from '../../../../components/ui/H2';
import { Text } from '../../../../components/ui/Text';

const ItemCotainer = styled.li`
  display: grid;

  grid-template-rows: repeat(2, 1fr);

  padding: ${() => ClampComponent(920, 1200, 1.5, 2.5)};

  gap: ${() => ClampComponent(920, 1200, 2, 3)};

  background-color: var(--card-color);

  border: 1px solid var(--black-color-light);

  border-radius: 1.4rem;
`;

const ImageContainer = styled.div`
  grid-row: 1 / 2;

  position: relative;

  & > img {
    max-width: 100%;

    height: auto;

    object-fit: cover;
  }
`;

function Press() {
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Press Release"></HeadingTextContainer>

      <GridContainer>
        <ItemCotainer>
          <ImageContainer>
            <Image
              src="/assets/images/press1.png"
              alt="A man shaking a woman"
              layout="fill"
              quality={75}
            />
          </ImageContainer>

          <ColumnFlex>
            <H4 type="sm">
              YourBank Launches New Rewards Program to Enhance Customer Loyalty
              and Satisfaction
            </H4>
            <NormalFlex type="container">
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Date: 06/11/2024 </Text>
            </NormalFlex>

            <Text color="dark">
              YourBank is pleased to announce the introduction of our new
              Rewards Program, aimed at rewarding our loyal customers and
              enhancing their banking experience. The program offers exclusive
              benefits, discounts, and personalized offers tailored to
              individual customer preferences. With this initiative, YourBank
              reaffirms its commitment to delivering exceptional value and
              building lasting relationships with our valued customers.
            </Text>
          </ColumnFlex>
        </ItemCotainer>

        <ItemCotainer>
          <ImageContainer>
            <Image
              src="/assets/images/press2.png"
              alt="YourBank newly lunches building"
              layout="fill"
              quality={75}
            />
          </ImageContainer>

          <ColumnFlex>
            <H4>
              YourBank Expands Branch Network with Opening of New Location in
              Abuja.
            </H4>
            <NormalFlex type="container">
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Date: 06/11/2024 </Text>
            </NormalFlex>

            <Text color="dark">
              YourBank is excited to announce the grand opening of our newest
              branch in Abuja. This expansion is a testament to our continued
              commitment to serving our customers and providing them with
              convenient access to our comprehensive range of banking services.
              The new branch will feature state-of-the-art facilities, a team of
              dedicated professionals, and a personalized approach to banking,
              further strengthening our presence in the local community.
            </Text>
          </ColumnFlex>
        </ItemCotainer>

        <ItemCotainer>
          <ImageContainer>
            <Image
              src="/assets/images/press3.png"
              alt="A man making analysis with pen"
              layout="fill"
              quality={75}
            />
          </ImageContainer>

          <ColumnFlex>
            <H4>
              YourBank Partners with Local Nonprofit to Support Financial
              Education Initiatives
            </H4>
            <NormalFlex type="container">
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Date: 06/11/2024 </Text>
            </NormalFlex>

            <Text color="dark">
              YourBank is excited to unveil our new Sustainable Banking
              Initiative, demonstrating our commitment to environmental
              responsibility. This initiative includes a range of sustainable
              banking products and services, such as green loans, eco-friendly
              investment options, and paperless banking solutions. By
              incorporating sustainable practices into our operations, we aim to
              contribute to a greener future while providing innovative banking
              solutions to our customers.
            </Text>
          </ColumnFlex>
        </ItemCotainer>

        <ItemCotainer>
          <ImageContainer>
            <Image
              src="/assets/images/press4.png"
              alt="A man pressing a tablet"
              layout="fill"
              quality={75}
            />
          </ImageContainer>

          <ColumnFlex>
            <H4>
              YourBank Launches Sustainable Banking Initiative to Promote
              Environmental Responsibility.
            </H4>
            <NormalFlex type="container">
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Date: 06/11/2024 </Text>
            </NormalFlex>

            <Text color="dark">
              YourBank is excited to unveil our new Sustainable Banking
              Initiative, demonstrating our commitment to environmental
              responsibility. This initiative includes a range of sustainable
              banking products and services, such as green loans, eco-friendly
              investment options, and paperless banking solutions. By
              incorporating sustainable practices into our operations, we aim to
              contribute to a greener future while providing innovative banking
              solutions to our customers.
            </Text>
          </ColumnFlex>
        </ItemCotainer>
      </GridContainer>
    </SectionContainer>
  );
}

export default Press;
