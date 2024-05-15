'use client';

import styled from 'styled-components';

import { ClampComponent } from '../../../styles/clampBuilder';
import { Text } from '../../ui/Text';
import Future from '/public/assets/icons/future.svg';
import Home from '/public/assets/icons/home.svg';
import Finance from '/public/assets/icons/finance.svg';
import Edu from '/public/assets/icons/edu.svg';
import Dot from '/public/assets/icons/dot-lg.svg';

import { TextGradient } from '../../ui/TextGradient';
import { HeadingWrapper } from './HeadingWrapper';
import { InlineContainer } from '../../ui/InlineContiner';
import { H2 } from '../../ui/H2';

const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
`;

const USeContainer = styled.div`
  &:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &:last-child {
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }

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

const ContentContainer = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 1fr;
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

const AllCasesContainer = styled.div`
  display: grid;

  grid-template-rows: repeat(2, 1fr);

  grid-template-columns: 1.5fr 1fr;

  gap: ${() => ClampComponent(920, 1200, 3, 5)};
`;

function UseCases() {
  return (
    <SectionContainer>
      <HeadingWrapper>
        <H2>
          <TextGradient as="h2"> Use Cases </TextGradient>
        </H2>

        <Text color="dark">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </Text>
      </HeadingWrapper>

      <AllCasesContainer>
        <USeContainer>
          <CaseCardContainer>
            <AbstractContainer>
              <Dot />
            </AbstractContainer>
            <CaseCard>
              <Finance />
              <Text type="head">Managing Personal Finances</Text>
            </CaseCard>

            <CaseCard>
              <Future />
              <Text type="head">Saving for the future</Text>
            </CaseCard>

            <CaseCard>
              <Home />
              <Text type="head">Homeownership</Text>
            </CaseCard>

            <CaseCard>
              <Edu />
              <Text type="head">Education Funding</Text>
            </CaseCard>
          </CaseCardContainer>
        </USeContainer>

        <CaseType>
          <HeadingWrapper>
            <Text type="head">For Individuals</Text>
            <Text color="dark">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </Text>
          </HeadingWrapper>

          <ContentContainer>
            <FeatContainer>
              <TextGradient as="h2"> 78% </TextGradient>

              <Text color="dark">Secure Retirement Planning</Text>
            </FeatContainer>

            <FeatContainer>
              <TextGradient as="h2"> 63% </TextGradient>

              <Text color="dark">Manageable Debt Consolidation.</Text>
            </FeatContainer>

            <FeatContainer>
              <TextGradient as="h2"> 91% </TextGradient>

              <Text color="dark">Reduced Financial Burden</Text>
            </FeatContainer>
          </ContentContainer>
        </CaseType>
      </AllCasesContainer>
    </SectionContainer>
  );
}

export default UseCases;
