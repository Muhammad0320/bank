'use client';

import { Text } from '../../ui/Text';
import styled from 'styled-components';
import Next from '/public/assets/icons/next.svg';
import Apos from '/public/assets/icons/apos.svg';
import { TextGradient } from '../../ui/TextGradient';
import { SectionContainer } from '../../ui/SectionContainer';
import { ClampComponent } from '../../../styles/clampBuilder';
import HeadingTextContainer from '../../ui/HeadingWrapper';

const ContentContainer = styled.div`
  display: grid;

  justify-items: center;

  grid-auto-flow: column;

  grid-auto-columns: auto 1fr auto;

  gap: ${() => ClampComponent(320, 1200, 2, 3)};

  & > span:last-child > svg {
    transform: rotateY(180deg);
  }
`;

const IconContainer = styled.span`
  align-self: center;

  background-color: var(--black-color);

  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  border: 1px solid var(--black-color-light);

  display: flex;

  justify-content: center;

  align-items: center;
`;

const TestimonialsContainer = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 1fr;

  gap: ${() => ClampComponent(320, 1200, 4, 6)};

  mask-image: linear-gradient(
    90deg,
    transparent,
    rgb(0 0 0 / 0.95) 20%,
    rgb(0 0 0 / 0.95) 80%,
    transparent
  );

  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgb(0 0 0 / 0.95) 20%,
    rgb(0 0 0 / 0.95) 80%,
    transparent
  );
`;

const TestimonialWrapper = styled.div`
  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(320, 1200, 2, 3.4)};

  justify-content: center;
  align-items: center;

  & > p {
    text-align: center;
  }

  & > span {
    font-size: ${() => ClampComponent(320, 1200, 1, 1.4)};
  }
`;

function Testimonials() {
  return (
    <SectionContainer>
      <HeadingTextContainer
        withGradient="Testimonials"
        withoutGradient="our"
        withCategory
      >
        Discover how YourBank has transformed lives with innovative digital
        solutions and personalized customer service. See why our clients trust
        us for a secure and prosperous financial journey
      </HeadingTextContainer>

      <ContentContainer>
        <IconContainer>
          <Next />
        </IconContainer>
        <>
          <TestimonialsContainer>
            <TestimonialWrapper>
              <Apos />
              <Text>
                I recently started my own business, and YourBank has been
                instrumental in helping me set up my business accounts and
                secure the financing I needed. Their expert guidance and
                tailored solutions have been invaluable.
              </Text>
              <TextGradient> Lisan alGaib </TextGradient>
            </TestimonialWrapper>

            <TestimonialWrapper>
              <Apos />
              <Text>
                I recently started my own business, and YourBank has been
                instrumental in helping me set up my business accounts and
                secure the financing I needed. Their expert guidance and
                tailored solutions have been invaluable.
              </Text>
              <TextGradient> Andrew Tate </TextGradient>
            </TestimonialWrapper>

            <TestimonialWrapper>
              <Apos />
              <Text>
                I recently started my own business, and YourBank has been
                instrumental in helping me set up my business accounts and
                secure the financing I needed. Their expert guidance and
                tailored solutions have been invaluable.
              </Text>
              <TextGradient> Shit man </TextGradient>
            </TestimonialWrapper>
          </TestimonialsContainer>
        </>

        <IconContainer>
          <Next />
        </IconContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Testimonials;
