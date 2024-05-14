'use client';

import styled from 'styled-components';

import { ClampComponent } from '../../../styles/clampBuilder';
import { Text } from '../../ui/Text';
import Future from '/public/assets/icons/future.svg';
import Home from '/public/assets/icons/home.svg';
import Finance from '/public/assets/icons/finance.svg';
import Edu from '/public/assets/icons/finance.svg';

import { TextGradient } from '../../ui/TextGradient';
import { HeadingWrapper } from './HeadingWrapper';

const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
`;

const USeContainer = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-template-columns: 1fr;

  gap: ${() => ClampComponent(920, 1200, 2.5, 4)};
`;

const CaseCardContainer = styled.div`
  position: relative;
  display: grid;
  padding: ${() => ClampComponent(920, 1200, 1, 3)};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(920, 1200, 1.5, 2.5)};

  border-radius: 1.4rem;

  background-color: var(--card-color);
`;

const CaseType = styled.div`
  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 2.8, 4)};
`;

const FeatContainer = styled(InlineContainer)`
  & > h2 {
    font-size: ${() => ClampComponent(920, 1200, 4, 6)};
  }
`;

const CaseCard = styled.div`
  display: flex;

  flex-direction: column;

  gap: ${() => ClampComponent(920, 1200, 1, 1.4)};

  align-items: center;

  padding-inline: ${() => ClampComponent(920, 1200, 1.1, 1.6)};

  padding-block: ${() => ClampComponent(920, 1200, 1, 1.4)};

  border-radius: 1.4rem;

  border: 1px solid var(--black-color-light);

  &:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &:nth-child(2) {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  }

  &:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
  }

  &:last-child {
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }
`;

const AbstractContainer = styled.div`
  position: absolute;

  inset: 0;
`;

function UseCases() {
  return (
    <SectionContainer>
      <HeadingWrapper>
        <Text type="head">
          <TextGradient as="h2"> Use Cases </TextGradient>
        </Text>

        <Text color="dark">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </Text>
      </HeadingWrapper>

      <USeContainer>
        <CaseCardContainer></CaseCardContainer>
      </USeContainer>
    </SectionContainer>
  );
}

export default UseCases;
