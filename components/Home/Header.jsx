'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';
import { Button } from '../ui/Button';
import Ngn from '/public/assets/icons/ngn.svg';
import Usa from '/public/assets/icons/usa.svg';
import Stroke from '/public/assets/icons/stroke.svg';
import Arrows from '/public/assets/icons/arrows.svg';
import { FancyBorder } from '../ui/FancyBorder';

const StyledHeader = styled.header`
  margin-block-start: ${() => ClampComponent(920, 1200, 7, 10)};

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  column-gap: ${() => ClampComponent(920, 1200, 4, 6)};
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

  color: var(--text-color);
`;

const TextH1 = styled.h1`
  font-size: ${() => ClampComponent(920, 1200, 4, 5)};

  color: var(--text-color);
`;

const Text = styled.p`
  color: var(--text-color);

  font-size: ${() => ClampComponent(920, 1200, 1, 1.4)};
`;

const AbstractContainer = styled.div`
  position: absolute;

  z-index: -1;

  top: 50%;
  left: -40%;
`;

const HeroContainer = styled(FancyBorder)`
  position: relative;
  padding: ${() => ClampComponent(320, 1200, 2, 3.5)};
  background-color: var(--black-color);
  grid-column: 2 / -1;

  max-height: 75dvh;

  display: grid;
  grid-template-rows: auto 1fr 0.9fr auto;

  row-gap: ${() => ClampComponent(920, 1200, 2, 3)};

  border-radius: 1.4rem;

  border: 1px solid green;
`;

const HeroText = styled.div`
  font-size: ${() => ClampComponent(920, 1200, 1.5, 2)};

  color: var(--text-color);
`;

const TxnCard = styled.div`
  width: 100%;

  align-content: center;
  display: grid;
  background-color: var(--card-color);

  grid-template-columns: 6rem 1fr;

  border-radius: 1.4rem;

  padding-inline: ${() => ClampComponent(320, 1200, 1.3, 2)};
  padding-block: ${() => ClampComponent(320, 1200, 1, 1.8)};

  border: 1px solid hsl(0, 0%, 11%);

  z-index: 100;

  &:nth-child(2) {
    opacity: 0.65;
    margin-top: -2rem;
    z-index: 10;
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

const TxnCardContainer = styled.div`
  grid-row: 2 / 3;

  display: flex;

  flex-flow: column;

  align-items: center;

  row-gap: -2rem;

  /* &:nth-child(2) {
    width: 85%;

    opacity: 0.8;
  }

  &:last-child {
    width: 70%;

    opacity: 0.6;
  }  */
`;

const CardContentContainer = styled.div`
  display: flex;

  flex-flow: column;
`;

const CurrencyCardContainer = styled.div`
  grid-row: 3 / 4;

  display: grid;

  grid-template-rows: 1.4fr 0.8fr;

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

  flex-flow: column;
  row-gap: 1rem;

  justify-content: center;
`;

const CurrencyInfo = styled.div`
  display: flex;
  row-gap: 1.5rem;
`;

const IconContainer = styled.span`
  background-image: var(--primary-gradient);

  height: 3.5rem;

  width: 3.5rem;

  margin-right: 1rem;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledTextContainer>
        <BenContainer>NO LLC Required. No credit check</BenContainer>
        <TextH1>Welcome to YourBank Empowering your financial journey</TextH1>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          tenetur numquam vel odio explicabo rem consequatur consequuntur ad,
          tempore adipisci, ipsa quaerat ex non illum id vitae sed. Ipsum,
          omnis!
        </Text>

        <Button>Open Acount</Button>
      </StyledTextContainer>

      <HeroContainer>
        <>
          <AbstractContainer>
            <Arrows />
          </AbstractContainer>
        </>
        <HeroText> Your Transations </HeroText>

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

        <CurrencyCardContainer>
          <CurrencyInfoContainer style={{ gridColumn: 1 / 2, gridRow: 1 / 2 }}>
            <CurrencyInfo>
              <Ngn />
              <HeroText style={{ marginLeft: '1rem' }}> NGN </HeroText>
            </CurrencyInfo>
            <Text> Nigerian Naira </Text>
          </CurrencyInfoContainer>

          <CurrencyInfoContainer style={{ gridColumn: 2 / -1, gridRow: 1 / 2 }}>
            <CurrencyInfo>
              <Usa />
              <HeroText style={{ marginLeft: '1rem' }}> USD </HeroText>
            </CurrencyInfo>
            <Text> United States Dollars </Text>
          </CurrencyInfoContainer>

          <HeroText style={{ gridColumn: 1 / 2, gridRow: 2 / -1 }}>
            {' '}
            5,000{' '}
          </HeroText>
          <HeroText style={{ gridColumn: 2 / -1, gridRow: 2 / -1 }}>
            {' '}
            10.00{' '}
          </HeroText>
        </CurrencyCardContainer>

        <Button kind="ex"> Exchange </Button>
      </HeroContainer>
    </StyledHeader>
  );
}

export default Header;
