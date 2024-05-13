import styled from 'styled-components';
import Btc from '/public/assets/icons/btc.svg';
import Usd from '/public/assets/icons/usd.svg';
import Euro from '/public/assets/icons/euro.svg';
import Eth from '/public/assets/icons/eth.svg';

import { ClampComponent } from '../../styles/clampBuilder';

const Container = styled.div`
  --lightness: 12%;

  position: absolute;

  bottom: -20%;
  right: -40%;

  background-color: hsl(var(--hue) var(--saturation) var(--lightness) / 0.9);

  border-radius: 3.6rem;

  padding: 1rem;

  display: flex;

  align-items: center;

  column-gap: 5px;

  color: var(--text-color);

  font-size: ${() => ClampComponent(320, 1200, 1, 1.5)};

  /* & > * {
    flex: 1;
  } */
`;

const CurrencyContainer = styled.div`
  display: flex;

  background-color: var(--black-color);

  padding: 0.8rem;

  border-radius: 3.6rem;

  column-gap: 0.4rem;
`;

const Currency = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  width: 3.5rem;

  border-radius: 50%;

  background-color: var(--card-color);

  padding: 0.8rem;
`;

function SupportedCurrency() {
  return (
    <Container>
      <span> Supported Currency </span>

      <CurrencyContainer>
        <Currency>
          <Usd />
        </Currency>

        <Currency>
          <Euro />
        </Currency>

        <Currency>
          <Btc />
        </Currency>

        <Currency>
          <Eth />
        </Currency>
      </CurrencyContainer>
    </Container>
  );
}

export default SupportedCurrency;
