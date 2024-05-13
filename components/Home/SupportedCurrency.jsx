import styled from 'styled-components';
import Btc from '/public/assets/icons/btc.svg';
import Usd from '/public/assets/icons/usd.svg';
import Euro from '/public/assets/icons/euro.svg';
import Eth from '/public/assets/icons/eth.svg';

import { ClampComponent } from '../../styles/clampBuilder';

const Container = styled.div`
  --lightness: 12%;

  position: absolute;

  bottom: 10%;
  right: 40%;

  background-color: hsl(var(--hue) var(--saturation) var(--lightness) / 0.9);

  border-radius: 3.6rem;

  display: flex;

  column-gap: 5px;

  color: var(--text-color);

  font-size: ${() => ClampComponent(320, 1200, 1.2, 1.6)};
`;

const CurrencyContainer = styled.div`
  display: flex;

  background-color: var(--black-color);

  padding: 1.5px;

  border-radius: 3.6rem;

  column-gap: 1px;
`;

const Currency = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  border-radius: 50%;

  background-color: var(--card-color);

  padding: 3px;
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
