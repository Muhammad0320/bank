'use client';

import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';
import Edu from '/public/assets/icons/edu.svg';
import styled, { css } from 'styled-components';
import Home from '/public/assets/icons/home.svg';
import Dot from '/public/assets/icons/dot-lg.svg';
import Future from '/public/assets/icons/future.svg';
import { TextGradient } from '../../ui/TextGradient';
import Finance from '/public/assets/icons/finance.svg';
import { InlineContainer } from '../../ui/InlineContiner';
import HeadingTextContainer from '../../ui/HeadingWrapper';
import { ClampComponent } from '../../../styles/clampBuilder';

const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 3, 5)};
`;

// const USeContainer = styled.div`
//   display: grid;

//   grid-auto-flow: column;

//   grid-template-columns: 1fr;

//   gap: ${() => ClampComponent(920, 1200, 2.5, 4)};
// `;

const CaseCardContainer = styled.div`
  position: relative;
  display: grid;
  padding: ${() => ClampComponent(920, 1200, 1, 3)};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(920, 1200, 1.5, 2.5)};

  border-radius: 1.4rem;

  min-width: 50rem;

  background-color: hsl(0, 0%, 12%);
`;

const CaseType = styled.div`
  display: flex;

  flex-flow: column;

  justify-content: space-between;

  padding-block: ${() => ClampComponent(920, 1200, 1.5, 3)};

  & > button {
    align-self: flex-start;
    justify-self: flex-start;
  }
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

  text-align: center;

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

  ${props =>
    props.position === 'alt' &&
    css`
      inset: unset;
      right: 0;
      transform: rotateY(190deg);
    `}
`;

const AllCasesContainer = styled.div`
  display: grid;

  grid-template-columns: 1.5fr 1fr;

  gap: ${() => ClampComponent(920, 1200, 3, 5)};
`;

function UseCases() {
  return (
    <SectionContainer>
      <HeadingTextContainer withoutGradient="Use Cases">
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </HeadingTextContainer>

      <AllCasesContainer>
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

        <CaseType>
          <HeadingTextContainer
            withoutGradient="For Individuals"
            withCategory={false}
          >
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </HeadingTextContainer>

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

          <Button>Learn more</Button>
        </CaseType>
      </AllCasesContainer>

      <AllCasesContainer>
        <CaseType>
          <HeadingTextContainer
            withoutGradient="For Business"
            withCategory={false}
          >
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them.
          </HeadingTextContainer>

          <ContentContainer>
            <FeatContainer>
              <TextGradient as="h2"> 65% </TextGradient>

              <Text color="dark">Cash Flow Management</Text>
            </FeatContainer>

            <FeatContainer>
              <TextGradient as="h2"> 70% </TextGradient>

              <Text color="dark"> Drive Business Exploration. </Text>
            </FeatContainer>

            <FeatContainer>
              <TextGradient as="h2"> 45% </TextGradient>
              <Text color="dark"> Streaming Payroll processing. </Text>
            </FeatContainer>
          </ContentContainer>

          <Button>Learn more</Button>
        </CaseType>

        <CaseCardContainer>
          <AbstractContainer position="alt">
            <Dot />
          </AbstractContainer>
          <CaseCard>
            <Finance />
            <Text type="head"> Startups and Entrepreneur </Text>
          </CaseCard>

          <CaseCard>
            <Future />
            <Text type="head">Cash Flow Managenemt</Text>
          </CaseCard>

          <CaseCard>
            <Home />
            <Text type="head"> Business Expansion </Text>
          </CaseCard>

          <CaseCard>
            <Edu />
            <Text type="head"> Payment Solution </Text>
          </CaseCard>
        </CaseCardContainer>
      </AllCasesContainer>
    </SectionContainer>
  );
}

export default UseCases;
