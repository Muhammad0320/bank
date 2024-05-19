import styled, { css } from 'styled-components';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { ClampComponent } from '../../../../styles/clampBuilder';

const ContentContainer = styled.div`
  display: flex;

  grid-template-columns: 1fr 10rem 1fr;

  gap: 1rem;

  grid-template-rows: repeat(4, 1fr);

  & > div:has(p):first-child {
    grid-column: 2 / -1;
  }

  & > div:has(p):nth-child(2) {
    grid-column: 1 / span 2;
  }
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

    border-radius: 2rem 2rem 0 0;
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

      <ContentContainer></ContentContainer>
    </SectionContainer>
  );
}

export default Mission;
