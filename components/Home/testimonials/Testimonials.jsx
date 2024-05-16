'use client';

import styled from 'styled-components';
import HeadingWrapper from '../../ui/HeadingWrapper';
import { SectionContainer } from '../../ui/SectionContainer';
import { ClampComponent } from '../../../styles/clampBuilder';

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


& > svg: :last-of-type {

transform: rotateX(-45deg); 


}


`;

const TestimonialsContainer = styled.div`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 4, 6)};

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
      <HeadingWrapper withGradient="Testimonials" withoutGradient="our">
        Discover how YourBank has transformed lives with innovative digital
        solutions and personalized customer service. See why our clients trust
        us for a secure and prosperous financial journey
      </HeadingWrapper>

      <ContentContainer></ContentContainer>
    </SectionContainer>
  );
}

export default Testimonials;
