'use client';

import { Text } from '../../ui/Text';
import styled from 'styled-components';
import { TextGradient } from '../../ui/TextGradient';
import { ClampComponent } from '../../../styles/clampBuilder';

import Loan from '/public/assets/icons/loan.svg';
import Savings from '/public/assets/icons/savings.svg';
import Account from '/public/assets/icons/account.svg';
import { HeadingWrapper } from './HeadingWrapper';
import { InlineContainer } from '../../ui/InlineContiner';
import { H2 } from '../../ui/H2';

const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
`;

const ProductCategory = styled.div`
  display: flex;
  padding: 1rem;

  border: 1px solid var(--black-color-light);

  border-radius: 3.6rem;

  & > * {
    flex: 1;
    min-width: fit-content;

    color: var(--text-color-light);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1.2rem;
    padding-block: 0.8rem;
    border-radius: 3.6rem;
  }

  & > .active {
    background-image: var(--primary-gradient);
    color: var(--black-color);
  }
`;

const TextContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 1fr;
`;

const ProdContainer = styled(InlineContainer)`
  align-items: center;

  text-align: center;
`;

function Products() {
  return (
    <SectionContainer>
      <TextContainer>
        <HeadingWrapper>
          <H2>
            {' '}
            Our <TextGradient> Product </TextGradient>{' '}
          </H2>

          <Text color="dark">
            Discover a range of comprehensive and customizable banking products
            at YourBank, <br /> designed to suit your unique financial needs and
            aspirations
          </Text>
        </HeadingWrapper>

        <ProductCategory>
          <span className="active">For Individual</span>

          <span>For Business</span>
        </ProductCategory>
      </TextContainer>

      <ContentContainer>
        <ProdContainer>
          <Account />
          <Text color="dark" type="head">
            {' '}
            Checking Account{' '}
          </Text>
          <Text color="dark">
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </Text>
        </ProdContainer>

        <ProdContainer>
          <Savings />
          <Text color="dark" type="head">
            {' '}
            Savings Account{' '}
          </Text>
          <Text color="dark">
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you&apos;re saving for a specific
            goal or want to grow your wealth over time, we have the right
            account for you.
          </Text>
        </ProdContainer>

        <ProdContainer>
          <Loan />
          <Text color="dark" type="head">
            {' '}
            Loans and Mortgages{' '}
          </Text>
          <Text color="dark">
            Realize your dreams with our flexible loan and mortgage options.
            From personal loans to home mortgages, our experienced loan officers
            are here to guide you through the application process and help you
            secure the funds you need.
          </Text>
        </ProdContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Products;
