import styled from 'styled-components';

import Plus from '/public/assets/icons/plus.svg';
import { ClampComponent } from '../../styles/clampBuilder';
import { IconContainer } from '../ui/IconContainer';

const CardContainer = styled.div`
  --lightness: 15%;

  background-color: hsl(var(--hue) var(--saturation) var(--lightness));

  display: flex;

  column-gap: 5px;

  padding: ${() => ClampComponent(320, 1200, 1, 1.5)};
  position: absolute;
  top: -50%;
  left: -50%;
  color: var(--test-color);
`;

const TextContainer = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: 3px;

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
