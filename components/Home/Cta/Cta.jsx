'use client';

import styled from 'styled-components';
import Dot from '/public/assets/icons/dot-lg.svg';

import { H2 } from '../../ui/H2';
import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';
import { TextGradient } from '../../ui/TextGradient';
import { ClampComponent } from '../../../styles/clampBuilder';

const CtaContainer = styled.section`
  position: relative;
  display: flex;

  justify-content: space-between;

  align-items: center;

  border: 1px solid var(--card-color);

  border-radius: 1.4rem;

  padding: ${() => ClampComponent(920, 1200, 2.5, 5)};
`;

const AbstractContainer = styled.div`
  position: absolute;
  inset: 0;
`;

const TextContainer = styled.div`
  margin-inline-end: ${() => ClampComponent(920, 1200, 3, 5)};

  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 1, 2.5)};
`;

function Cta() {
  return (
    <CtaContainer>
      <AbstractContainer>
        <Dot />
      </AbstractContainer>

      <TextContainer>
        <H2 type="small">
          Start your financial journey with{' '}
          <TextGradient> YourBank today! </TextGradient>
        </H2>

        <Text color="dark">
          {' '}
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </Text>
      </TextContainer>

      <Button>Open account</Button>
    </CtaContainer>
  );
}

export default Cta;
