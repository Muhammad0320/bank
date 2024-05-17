'use client';

import { Text } from '../../ui/Text';
import styled from 'styled-components';
import Goto from '/public/assets/icons/goto.svg';
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

  gap: ${() => ClampComponent(320, 1200, 1, 2)};
`;

const IconContainer = styled.span`
  width: 4rem;
  height: 4rem;

  display: flex;

  justify-content: center;

  align-items: center;

  & > svg:first-of-type {
    transform: rotateX(45deg);
  }

  & > svg:last-of-type {
    transform: rotateX(-45deg);
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 4, 6)};

  mask-image:
    linear-gradient(90deg, rgb(0 0 0), rgb(0 0 0 / 0.2) 10%, rgb(0 0 0 / 0.2))
      90%,
    rgb(0 0 0);

  -webkit-mask-image:
    linear-gradient(90deg, rgb(0 0 0), rgb(0 0 0 / 0.2) 10%, rgb(0 0 0 / 0.2))
      90%,
    rgb(0 0 0);

  flex-wrap: nowrap;

  & > * {
    flex: 1;

    min-width: fit-content;
  }
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
      <HeadingTextContainer withGradient="Testimonials" withoutGradient="our">
        Discover how YourBank has transformed lives with innovative digital
        solutions and personalized customer <br /> service. See why our clients
        trust us for a secure and prosperous financial journey
      </HeadingTextContainer>

      <ContentContainer>
        <IconContainer>
          <Goto />
        </IconContainer>

        <TestimonialsContainer>
          <TestimonialWrapper>
            <Apos />
            <Text>
              I recently started my own business, and YourBank has been
              instrumental in helping me set up my business accounts and secure
              the financing I needed. Their expert guidance and tailored
              solutions have been invaluable.
            </Text>
          </TestimonialWrapper>

          <TextGradient> Lisan alGaib </TextGradient>
        </TestimonialsContainer>

        <TestimonialsContainer>
          <TestimonialWrapper>
            <Apos />
            <Text>
              I recently started my own business, and YourBank has been
              instrumental in helping me set up my business accounts and secure
              the financing I needed. Their expert guidance and tailored
              solutions have been invaluable.
            </Text>
          </TestimonialWrapper>

          <TextGradient> Andrew Tate </TextGradient>
        </TestimonialsContainer>

        <TestimonialsContainer>
          <TestimonialWrapper>
            <Apos />
            <Text>
              I recently started my own business, and YourBank has been
              instrumental in helping me set up my business accounts and secure
              the financing I needed. Their expert guidance and tailored
              solutions have been invaluable.
            </Text>
          </TestimonialWrapper>

          <TextGradient> Shit man </TextGradient>
        </TestimonialsContainer>

        <IconContainer>
          <Goto />
        </IconContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Testimonials;
