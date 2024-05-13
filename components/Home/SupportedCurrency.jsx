import styled from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

const Container = styled.div`
  -lightness: 12%;

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
  return <div></div>;
}

export default SupportedCurrency;
