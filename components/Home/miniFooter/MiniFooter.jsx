import styled from 'styled-components';
import Dot from '/public/assets/icons/dot-lg.svg';

import { ClampComponent } from '../../../styles/clampBuilder';
import { H2 } from '../../ui/H2';
import { TextGradient } from '../../ui/TextGradient';
import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';

const FooterContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;

  align-items: center;

  border: 1px solid var(--card-color);

  padding: ${() => ClampComponent(920, 1200, 4, 7)};
`;

const AbstractContainer = styled.div`
  position: absolute;
  inset: 0;
`;

const TextContainer = styled.div`
  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 2, 4)};
`;

function MiniFooter() {
  return (
    <FooterContainer>
      <AbstractContainer>
        <Dot />
      </AbstractContainer>

      <TextContainer>
        <H2>
          Start your financial journey with{' '}
          <TextGradient> YourBank today! </TextGradient>
        </H2>

        <Text color="dark">
          {' '}
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service{' '}
        </Text>
      </TextContainer>

      <Button>Open accounta</Button>
    </FooterContainer>
  );
}

export default MiniFooter;
