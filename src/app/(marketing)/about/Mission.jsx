'use client';

import styled, { css } from 'styled-components';
import { ClampComponent } from '../../../../styles/clampBuilder';
import Radial from '/public/assets/icons/radial.svg';
import Image from 'next/image';
import { ColumnFlex } from '../../../../components/ui/flex';
import { H3 } from '../../../../components/ui/H2';
import { Text } from '../../../../components/ui/Text';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';

const ContentContainer = styled.div`
  height: 100dvh;

  /* 
  & > div:has(p) {
    grid-column: 2 / -1;
    grid-row: 1.5 / 2.5;
  
  }

  & > div:has(p):nth-child(2) {
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
  } */
`;

const FigureContainer = styled.div`
  display: grid;

  grid-template-columns: 1.3fr 1fr 1fr;

  gap: ${() => ClampComponent(920, 1200, 1.5, 2.5)};

  &:first-child {
    margin-top: -2rem;
  }

  &:last-child {
    grid-template-columns: 1fr 1fr 1.3fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  /* translate: 0 4rem; */

  height: 100%;

  background-color: var(--card-color);

  overflow: hidden;

  border: 1px solid var(--black-color-light);

  border-radius: 1rem;

  padding-inline: ${() => ClampComponent(920, 1200, 2, 3)};

  padding-block-start: ${() => ClampComponent(920, 1200, 2, 3)};

  display: flex;

  justify-content: center;

  align-items: center;

  & > img {
    z-index: 10;
    align-self: flex-end;

    aspect-ratio: 1 2;

    /* max-width: 90%; */

    height: auto;

    object-fit: cover;

    translate: 0 1rem;

    /* border-radius: 2rem 2rem 0 0; */
  }

  grid-column: 1 / 2;

  &::after {
    position: absolute;

    content: '';

    z-index: 2;

    width: 3px;

    height: 40%;

    background-image: var(--primary-gradient);

    top: 35%;

    right: 0;
  }

  ${props =>
    props.type === '2nd' &&
    css`
      grid-column: 3 / -1;

      &::after {
        left: 0;
        right: auto;
      }
    `}
`;

const AbstractContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  translate: -50% -50%;
  z-index: 1;

  & > svg {
    scale: 1 0.9;
  }
`;

function Mission() {
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Mission & Vision">
        We envision being a leading force in the industry, driven by innovation,
        integrity, and inclusivity, creating a brighter financial future for
        individuals and businesses while maintaining a strong commitment to
        customer satisfaction and community development
      </HeadingTextContainer>

      <ContentContainer>
        <FigureContainer>
          <ImageContainer>
            <AbstractContainer>
              <Radial />
            </AbstractContainer>

            <img
              src="/assets/images/mission.png"
              alt="A plant growing from coins"
            />
          </ImageContainer>

          <ColumnFlex style={{ gridColumn: '2 / -1' }} type="center">
            <H3> Mission </H3>
            <Text color="dark">
              At YourBank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative
              banking solutions that cater to their unique needs. Through
              personalized services, expert guidance, and cutting-edge
              technology, we aim to build strong, lasting relationships with our
              customers. Our mission is to be their trusted partner, helping
              them navigate their financial journey and realize their dreams.
            </Text>
          </ColumnFlex>
        </FigureContainer>

        <FigureContainer>
          <ImageContainer type="2nd">
            <AbstractContainer>
              <Radial />
            </AbstractContainer>

            {/* <Image
            src="/assets/images/vision.png"
            alt="A Human Eye"
            quality={75}
            layout="fill"
          /> */}

            <img src="/assets/images/vision.png" alt="A Human Eye" />
          </ImageContainer>

          <ColumnFlex
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}
            type="center"
          >
            <H3> Vision </H3>
            <Text color="dark">
              Our vision at YourBank is to redefine banking by creating a
              seamless and personalized experience for our customers. We
              envision a future where banking is accessible, transparent, and
              tailored to individual preferences. Through continuous innovation
              and collaboration, we strive to be at the forefront of the
              industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our
              unwavering commitment to excellence, trust, and customer
              satisfaction.
            </Text>
          </ColumnFlex>
        </FigureContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Mission;
