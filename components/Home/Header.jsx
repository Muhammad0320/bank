'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';
import { Button } from '../ui/Button';

const StyledHeader = styled.header`
  margin-block-start: ${() => ClampComponent(920, 1200, 7, 10)};

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  column-gap: ${() => ClampComponent(920, 1200, 3, 6)};
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

  background-color: var(--color-card);

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

const HeroContainer = styled.div`
  grid-column: 2 / -1;
  display: grid;

  padding: 1.4rem;

  grid-template-rows: 2rem repeat(1, 1fr);

  row-gap: ${() => ClampComponent(920, 1200, 5, 6)};

  border-radius: 1.4rem;

  border: 1px solid var(--color-primary);
`;

const HeroText = styled.div`
  font-size: ${() => ClampComponent(920, 1200, 1.5, 2)};

  color: var(--text-color);
`;

const TxnCard = styled.div`
  display: grid;

  grid-template-rows: 6rem 1fr;

  border: 1px solid hsl(0, 0%, 11%);
`;

const TxnDetails = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;
`;

const TxnCardContainer = styled.div`
  grid-row: 2/ 3;

  display: flex;

  flex-flow: column;

  align-items: center;

  row-gap: -5px;

  background-color: var(--card-color);

  &:first-child {
    width: 100%;
  }

  &:nth-child(2) {
    width: 85%;

    opacity: 0.8;
  }

  &:last-child {
    width: 70%;

    opacity: 0.6;
  }
`;

const CurrencyCardContainer = styled.div`
  grid-row: 3 / -1;

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: repeat(2, 1fr);

  background-color: var(--card-color);

  border: 1px solid hsl(0, 0%, 11%);
`;

const IconContainer = styled.span`
  background-image: var(--primary-gradient);

  height: 2.5rem;

  width: 2.5rem;

  margin-right: 1rem;

  border-radius: 50%;

  display: grid;
  align-content: center;
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
        <HeroText> Your Transations </HeroText>

        <TxnCardContainer>
          <TxnCard>
            <IconContainer> I </IconContainer>
            <TxnDetails>
              <span> Shit man </span>
              <span> -$68.00 </span>
            </TxnDetails>
          </TxnCard>

          <TxnCard>
            <IconContainer> I </IconContainer>
            <TxnDetails>
              <span> Shit man </span>
              <span> -$68.00 </span>
            </TxnDetails>
          </TxnCard>

          <TxnCard>
            <IconContainer> I </IconContainer>
            <TxnDetails>
              <span> Shit man </span>
              <span> -$68.00 </span>
            </TxnDetails>
          </TxnCard>
        </TxnCardContainer>

        <CurrencyCardContainer></CurrencyCardContainer>
      </HeroContainer>
    </StyledHeader>
  );
}

export default Header;
