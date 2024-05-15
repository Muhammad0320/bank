'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import { HeadingWrapper } from '../products/HeadingWrapper';
import { TextGradient } from '../../ui/TextGradient';
import { H2 } from '../../ui/H2';
import Goto from '/public/assets/icons/goto.svg';

import { Text } from '../../ui/Text';

const SectionContainer = styled.section`
  display: flex;
  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 4, 6)};
`;

const ContentContainer = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;

  gap: ${() => ClampComponent(920, 1200, 2, 3.5)};
`;

const SideBar = styled.aside`
  background-color: var(--card-color);

  display: flex;
  flex-flow: column;
  gap: ${() => ClampComponent(920, 1200, 1.5, 3)};
  padding: ${() => ClampComponent(920, 1200, 2.4, 4)};
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

const SideNav = styled.li`
  padding: 0.8rem 1.2rem;

  color: var(--text-color);

  transition: all 350ms ease-out;

  &:hover,
  .active {
    background-image: var(--primary-gradient);

    background-clip: text;

    -webkit-background-clip: text;

    color: transparent;

    background-color: var(--black-color);
  }
`;

const FeatureContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(920, 1200, 2.5, 4)};
`;

const FeatureCard = styled.li`
  display: grid;

  grid-template-columns: 1fr auto;

  gap: ${() => ClampComponent(920, 1200, 2, 3.5)};

  border-radius: 1.4rem;

  border: 1px solid var(--card-color);
`;

const IconContainer = styled.span`
  grid-column: 2 /-1;

  grid-row: 1 / 2;
`;

function Features() {
  return (
    <SectionContainer>
      <HeadingWrapper>
        <H2>
          {' '}
          Our
          <TextGradient> Features </TextGradient>
        </H2>

        <Text color="dark">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all <br />
          designed to enhance your banking experience
        </Text>
      </HeadingWrapper>

      <ContentContainer>
        <SideBar>
          <SideNav> Online Banking </SideNav>
          <SideNav> Financial Tools </SideNav>
          <SideNav> Customer support </SideNav>
        </SideBar>

        <FeatureContainer>
          <FeatureCard>
            <Text type="head" style={{ gridColumn: '1 / 2' }}>
              {' '}
              24/7 Account Access{' '}
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text>
              Enjoy the convenience of accessing your accounts anytime, anywhere
              through our secure online banking platform. Check balances,
              transfer funds, and pay bills with ease.
            </Text>
          </FeatureCard>
          <FeatureCard>
            <Text type="head" style={{ gridColumn: '2 / -1' }}>
              Mobile banking App
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text>
              Stay connected to your finances on the go with our user-friendly
              mobile banking app. Easily manage your accounts, deposit checks,
              and make payments from your smartphone or tablet.
            </Text>
          </FeatureCard>{' '}
          <FeatureCard>
            <Text type="head" style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
              {' '}
              Secure Transaction
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text>
              Rest assured knowing that your transactions are protected by
              industry-leading security measures. We employ encryption and
              multi-factor authentication to safeguard your financial
              information.
            </Text>
          </FeatureCard>
          <FeatureCard>
            <Text
              type="head"
              style={{ gridColumn: '2 / -1', gridRow: '2 / -1' }}
            >
              Bill pay and Transfer
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text>
              Save time and avoid late fees with our convenient bill pay
              service. Set up recurring payments or make one-time transfers
              between your accounts with just a few clicks..
            </Text>
          </FeatureCard>
        </FeatureContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Features;
