'use client';

import { Text } from '../../ui/Text';
import IncomeCard from './IncomeCard';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import Ngn from '/public/assets/icons/ngn.svg';
import Usa from '/public/assets/icons/usa.svg';
import Check from '/public/assets/icons/check.svg';
import Arrows from '/public/assets/icons/arrows.svg';
import Stroke from '/public/assets/icons/stroke.svg';
import { FancyBorder } from '../../ui/FancyBorder';
import SupportedCurrency from './SupportedCurrency';
import { IconContainer } from '../../ui/IconContainer';
import { ClampComponent } from '../../../styles/clampBuilder';
import { TextGradient } from '../../ui/TextGradient';
import { H4 } from '../../ui/H2';

const StyledHeader = styled.header`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  column-gap: ${() => ClampComponent(920, 1200, 5, 7)};
`;

const StyledTextContainer = styled.div`
  display: flex;

  flex-flow: column;
  grid-column: 1 / 2;
  row-gap: 2rem;

  &:last-child {
    align-items: flex-start;
  }
`;

const BenContainer = styled.span`
  display: flex;

  background-color: var(--card-color);

  column-gap: 1rem;

  border-radius: 3.6rem;

  padding: 1.1rem;
  width: fit-content;

  color: var(--text-color);
`;

const TextH1 = styled.h1`
  font-size: ${() => ClampComponent(920, 1200, 3, 4)};

  font-weight: 600;

  color: var(--text-color);
`;

const AbstractContainer = styled.div`
  position: absolute;

  z-index: -1;

  top: 0%;
  right: -40%;
`;

const HeroContainer = styled(FancyBorder)`
  position: relative;

  padding: ${() => ClampComponent(320, 1200, 1.5, 3)};
  background-color: var(--black-color);
  grid-column: 2 / -1;

  /* max-width: 30dvw; */

  max-width: 85%;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const HeroText = styled.div`
  font-size: ${() => ClampComponent(920, 1200, 1.5, 2)};

  color: var(--text-color);

  max-height: max-content;
`;

const TxnCard = styled.div`
  width: 100%;

  align-content: center;
  display: grid;
  background-color: var(--card-color);

  grid-template-columns: 4.5rem 1fr;

  border-radius: 1.4rem;

  padding-inline: ${() => ClampComponent(320, 1200, 1.3, 2)};
  padding-block: ${() => ClampComponent(320, 1200, 1, 1.4)};

  border: 1px solid hsl(0, 0%, 11%);

  z-index: 5;

  &:nth-child(2) {
    opacity: 0.65;
    margin-top: -2rem;
    z-index: 4;
    width: 90%;
  }

  &:nth-child(3) {
    width: 80%;
    margin-top: -2rem;

    opacity: 0.45;
  }
`;

const TxnDetails = styled.div`
  display: flex;

  justify-content: space-between;
`;

const TxnContainer = styled.div`
  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 1.4, 2.5)};

  margin-bottom: -10rem;

  & > button {
    align-self: stretch;
    justify-content: stretch;
  }
`;

const TxnCardContainer = styled.div`
  grid-row: 1 / 2;

  display: flex;

  flex-flow: column;

  align-items: center;
`;

const CardContentContainer = styled.div`
  display: flex;

  flex-flow: column;
`;

const ExchangeContainer = styled.div`
  grid-row: 2 / -1;

  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(320, 1200, 1.3, 2)};
`;

const CurrencyCardContainer = styled.div`
  display: grid;

  grid-template-rows: 1.4fr 0.8fr;

  /* padding: 2rem; */

  grid-template-columns: repeat(2, 1fr);
  background-color: var(--card-color);

  border: 1px solid hsl(0, 0%, 11%);

  position: relative;

  border-radius: 1.4rem;

  &::before,
  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
  }

  &::before {
    top: 60%;

    box-shadow: inset 0 1px var(--black-color-light);
  }

  &::after {
    left: -50%;

    box-shadow: 1px 0 var(--black-color-light);
  }

  & > * {
    margin-inline-start: 2rem;

    width: 80%;
  }

  &:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    align-self: center;
  }
`;

const CurrencyInfoContainer = styled.div`
  display: flex;

  /* padding: 8px; */

  padding: ${() => ClampComponent(920, 1200, 0.8, 1.2)};

  flex-flow: column;
  gap: 8px;

  justify-content: center;

  flex-wrap: nowrap;

  & > p {
    font-size: ${() => ClampComponent(920, 1200, 1, 1.4)};
  }
`;

const CurrencyInfo = styled.div`
  display: flex;
  row-gap: 1.5rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledTextContainer>
        <BenContainer>
          <Check />

          <span>NO LLC Required. No credit check</span>
        </BenContainer>
        <TextH1>
          Welcome to YourBank Empowering your{' '}
          <TextGradient> Financial Journey </TextGradient>{' '}
        </TextH1>

        <Text>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers&apos; needs.
        </Text>

        <Button>Open Acount</Button>
      </StyledTextContainer>

      <HeroContainer>
        <>
          <AbstractContainer>
            <Arrows />
          </AbstractContainer>
        </>
        <IncomeCard />
        <SupportedCurrency />

        <TxnContainer>
          <H4> Your Transations </H4>

          <TxnCardContainer>
            <TxnCard>
              <IconContainer>
                {' '}
                <Stroke />{' '}
              </IconContainer>
              <CardContentContainer>
                <Text> Transaction </Text>
                <TxnDetails>
                  <span> Max Schwartz </span>
                  <span> -$89.00 </span>
                </TxnDetails>
              </CardContentContainer>
            </TxnCard>
            <TxnCard>
              <IconContainer>
                {' '}
                <Stroke />{' '}
              </IconContainer>
              <CardContentContainer>
                <Text> Transaction </Text>
                <TxnDetails>
                  <span> Kevin Powell </span>
                  <span> -$120.00 </span>
                </TxnDetails>
              </CardContentContainer>
            </TxnCard>{' '}
            <TxnCard>
              <IconContainer>
                {' '}
                <Stroke />{' '}
              </IconContainer>
              <CardContentContainer>
                <Text> Transaction </Text>
                <TxnDetails>
                  <span> Jeff Delaney </span>
                  <span> -$180.00 </span>
                </TxnDetails>
              </CardContentContainer>
            </TxnCard>
          </TxnCardContainer>
        </TxnContainer>

        <ExchangeContainer>
          <H4> Money Exchange</H4>
          <CurrencyCardContainer>
            <CurrencyInfoContainer
              style={{ gridColumn: 1 / 2, gridRow: 1 / 2 }}
            >
              <CurrencyInfo>
                <Ngn />
                <H4 style={{ marginLeft: '1rem' }}> NGN </H4>
              </CurrencyInfo>
              <Text> Nigerian Naira </Text>
            </CurrencyInfoContainer>

            <CurrencyInfoContainer
              style={{ gridColumn: 2 / -1, gridRow: 1 / 2 }}
            >
              <CurrencyInfo>
                <Usa />
                <H4 style={{ marginLeft: '1rem' }}> USD </H4>
              </CurrencyInfo>

              <Text> United States Dollars </Text>
            </CurrencyInfoContainer>

            <H4 style={{ gridColumn: 1 / 2, gridRow: 2 / -1 }}> 5,000 </H4>
            <H4 style={{ gridColumn: 2 / -1, gridRow: 2 / -1 }}> 10.00 </H4>
          </CurrencyCardContainer>

          <Button kind="ex"> Exchange </Button>
        </ExchangeContainer>
      </HeroContainer>
    </StyledHeader>
  );
}

export default Header;
