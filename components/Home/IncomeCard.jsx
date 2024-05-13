import styled from 'styled-components';

import Plus from '/public/assets/icons/plus.svg';
import { ClampComponent } from '../../styles/clampBuilder';
import { IconContainer } from '../ui/IconContainer';

const CardContainer = styled.div`
  --lightness: 12%;

  background-color: hsl(var(--hue) var(--saturation) var(--lightness) / 0.9);

  display: flex;

  border-radius: 1rem;

  column-gap: 3px;

  padding: ${() => ClampComponent(320, 1200, 1, 1.5)};
  position: absolute;
  transform: translate(-50%, -50%);
  color: var(--test-color);

  /* z-index: 1000; */
  box-shadow: var(--box-shadow-dark);
`;

const TextContainer = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: 1.5px;

  font-size: ${() => ClampComponent(320, 1200, 1.1, 1.5)};

  & > span:first-of-type {
    font-weight: 600;
    font-size: ${() => ClampComponent(320, 1200, 1.3, 2)};
  }
`;

function IncomeCard() {
  return (
    <CardContainer>
      <IconContainer>
        <Plus />
      </IconContainer>

      <TextContainer>
        <span> + $5000,00 </span>
        <span> Monthly income </span>
      </TextContainer>
    </CardContainer>
  );
}

export default IncomeCard;
