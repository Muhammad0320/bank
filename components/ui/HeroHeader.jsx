'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';
import { Text } from './Text';
import { AbstractContainer } from './AbstractContainer';
import Dot from '/public/assets/icons/dot-lg.svg';
import Image from 'next/image';
import { TextGradient } from './TextGradient';

const HeroContainer = styled.header`
  position: relative;
  background-color: var(--card-color);

  padding: ${() => ClampComponent(920, 1200, 2, 3)};

  display: grid;

  grid-template-columns: 1fr 20rem 1.2fr;

  grid-template-rows: 0.9fr 0.65fr;

  align-content: center;

  border-radius: 1.4rem;

  & > div:has(svg) {
    position: absolute;
    right: 0;
    transform: rotateY(190deg);
  }
`;

const HeroTextContainer = styled.div`
  grid-row: 1 / 2;

  z-index: 1;
  height: fit-content;
  background-color: var(--black-color);

  grid-column: 1 / 3;

  border-radius: 1.4rem 0 5rem 1.4rem;

  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 1, 1.8)};

  padding-inline: ${() => ClampComponent(920, 1200, 2, 3)};
  padding-block: ${() => ClampComponent(920, 1200, 2.5, 4)};

  color: var(--text-color);

  & > h1 {
    font-weight: 600;

    font-size: ${() => ClampComponent(920, 1200, 2.5, 4)};

    word-spacing: 1px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  grid-row: 1 / -1;
  grid-column: 2 / -1;
  border-radius: inherit;
  max-width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

function HeroHeader({
  withGradient,
  withoutGradient,
  greeting,
  opt,
  children,
  src,
}) {
  return (
    <HeroContainer>
      <AbstractContainer position="alt">
        <Dot />
      </AbstractContainer>
      <HeroTextContainer>
        {greeting && <Text> {greeting} </Text>}

        <h1>
          {withoutGradient} <TextGradient> {withGradient} </TextGradient>{' '}
          {opt || ''}
        </h1>

        <Text color="dark">{children}</Text>
      </HeroTextContainer>

      <ImageContainer>
        <Image src={src} alt="Carrer header hero" quality={75} layout="fill" />
      </ImageContainer>
    </HeroContainer>
  );
}

export default HeroHeader;
