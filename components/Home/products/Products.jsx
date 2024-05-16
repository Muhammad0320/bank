'use client';

import { Text } from '../../ui/Text';
import styled from 'styled-components';

import Loan from '/public/assets/icons/loan.svg';
import HeadingWrapper from '../../ui/HeadingWrapper';
import Savings from '/public/assets/icons/savings.svg';
import Account from '/public/assets/icons/account.svg';
import { InlineContainer } from '../../ui/InlineContiner';
import { ClampComponent } from '../../../styles/clampBuilder';

const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
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
      <HeadingWrapper withGradient={'Product'} withoutGradient="Our">
        Discover a range of comprehensive and customizable banking products at
        YourBank, <br /> designed to suit your unique financial needs and
        aspirations
      </HeadingWrapper>
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
