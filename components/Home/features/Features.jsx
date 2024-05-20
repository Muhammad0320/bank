'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import Goto from '/public/assets/icons/goto.svg';

import { Text } from '../../ui/Text';
import HeadingTextContainer from '../../ui/HeadingWrapper';

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
  justify-self: start;
  align-self: flex-start;

  background-color: var(--card-color);

  border-radius: 1rem;
  padding: ${() => ClampComponent(920, 1200, 2.4, 4)};
  box-shadow: var(--box-shadow-dark-2);
`;

const SideNavUl = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${() => ClampComponent(920, 1200, 1.5, 3)};
  justify-content: center;
  align-items: center;
`;

const SideNav = styled.li`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  color: var(--text-color);

  transition: all 350ms ease-out;

  border: 1px solid var(--black-color-light);

  border-radius: 3.6rem;

  &:hover,
  &.active {
    background-image: var(--primary-gradient);

    background-clip: text;

    -webkit-background-clip: text;

    color: transparent;

    background-color: var(--black-color);
    box-shadow: var(--box-shadow-button);
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

  justify-content: center;
  align-items: center;

  grid-template-columns: 1fr auto;

  grid-template-rows: auto 1fr;

  padding: ${() => ClampComponent(920, 1200, 2, 3)};

  gap: ${() => ClampComponent(920, 1200, 2, 3.5)};

  box-shadow: var(--box-shadow-dark);

  border-radius: 1.4rem;

  border: 1px solid var(--card-color);
`;

const IconContainer = styled.span`
  cursor: pointer;

  grid-column: 2 /-1;

  grid-row: 1 / 2;
`;

function Features() {
  return (
    <SectionContainer>
      <HeadingTextContainer withoutGradient="Our" withGradient="Features">
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </HeadingTextContainer>
      <ContentContainer>
        <SideBar>
          <SideNavUl>
            <SideNav className="active"> Online Banking </SideNav>
            <SideNav> Financial Tools </SideNav>
            <SideNav> Customer support </SideNav>
          </SideNavUl>
        </SideBar>

        <FeatureContainer>
          <FeatureCard>
            <Text type="head" style={{ gridColumn: '1 / 2' }}>
              24/7 Account Access
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text style={{ gridColumn: 'span 2' }}>
              Enjoy the convenience of accessing your accounts anytime, anywhere
              through our secure online banking platform. Check balances,
              transfer funds, and pay bills with ease.
            </Text>
          </FeatureCard>

          <FeatureCard>
            <Text type="head" style={{ gridColumn: '1 / 2' }}>
              Mobile Banking App
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text style={{ gridColumn: 'span 2' }}>
              Stay connected to your finances on the go with our user-friendly
              mobile banking app. Easily manage your accounts, deposit checks,
              and make payments from your smartphone or tablet.
            </Text>
          </FeatureCard>

          <FeatureCard>
            <Text type="head" style={{ gridColumn: '1 / 2' }}>
              Secure Transaction
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text style={{ gridColumn: 'span 2' }}>
              Rest assured knowing that your transactions are protected by
              industry-leading security measures. We employ encryption and
              multi-factor authentication to safeguard your financial
              information.
            </Text>
          </FeatureCard>

          <FeatureCard>
            <Text type="head" style={{ gridColumn: '1 / 2' }}>
              Bill and Transfer
            </Text>

            <IconContainer>
              <Goto />
            </IconContainer>

            <Text style={{ gridColumn: 'span 2' }}>
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
