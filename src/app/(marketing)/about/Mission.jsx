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
  display: grid;

  grid-template-columns: 1fr 10rem 1fr;

  gap: 1rem;

  grid-template-rows: repeat(4, 1fr);

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

const ImageContainer = styled.div`
  position: relative;

  background-color: var(--card-color);

  border: 1px solid var(--black-color-light);

  border-radius: 1rem;

  padding-inline: ${() => ClampComponent(920, 1200, 2, 3)};

  padding-block-start: ${() => ClampComponent(920, 1200, 2, 3)};

  display: flex;

  justify-content: center;

  align-items: center;

  &:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / span 2.5;
  }
  &:last-child {
    grid-column: 3 / -1;
    grid-row: 2 / span -1;
  }

  & > image {
    align-self: flex-end;

    max-width: 100%;

    height: auto;

    object-fit: cover;

    /* border-radius: 2rem 2rem 0 0; */
  }

  &::after {
    position: absolute;

    content: '';

    width: 2px;

    height: 40%;

    background-image: var(--primary-gradient);

    top: 50%;

    right: 0;
  }
`;

const AbstractContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  translate: -50% -50%;
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
        <ImageContainer>
          <AbstractContainer>
            <Radial />
          </AbstractContainer>

          <Image
            src="/assets/images/mission.png"
            alt="A plant growing from coins"
            quality={75}
            layout="fill"
          />
        </ImageContainer>

        <ColumnFlex style={{ gridColumn: ' 2 / span 2' }}>
          <H3> Mission </H3>
          <Text color="dark">
            At YourBank, our mission is to empower our customers to achieve
            financial success. We are dedicated to delivering innovative banking
            solutions that cater to their unique needs. Through personalized
            services, expert guidance, and cutting-edge technology, we aim to
            build strong, lasting relationships with our customers. Our mission
            is to be their trusted partner, helping them navigate their
            financial journey and realize their dreams.
          </Text>
        </ColumnFlex>

        <ImageContainer>
          <AbstractContainer>
            <Radial />
          </AbstractContainer>

          <Image
            src="/assets/images/vision.png"
            alt="A Human Eye"
            quality={75}
            layout="fill"
          />
        </ImageContainer>

        <ColumnFlex style={{ gridColumn: '1 / span 2' }}>
          <H3> Vision </H3>
          <Text color="dark">
            Our vision at YourBank is to redefine banking by creating a seamless
            and personalized experience for our customers. We envision a future
            where banking is accessible, transparent, and tailored to individual
            preferences. Through continuous innovation and collaboration, we
            strive to be at the forefront of the industry, setting new standards
            for customer-centric banking. Our vision is to be the preferred
            financial institution, known for our unwavering commitment to
            excellence, trust, and customer satisfaction.
          </Text>
        </ColumnFlex>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Mission;
