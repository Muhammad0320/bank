import styled from 'styled-components';
import { clampBuilder, ClampComponent } from '../../styles/clampBuilder';
import { Button } from '../ui/Button';

const StyledHeader = styled.header`
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
    align-self: flex-start;
  }
`;

const BenContainer = styled.spam`
  display: flex;

  background-color: var(--color-card);

  color: var(--text-color);
`;

const TextH1 = styled.h1`
  font-size: ${() => clampBuilder(920, 1200, 5, 6)};

  color: var(--primary-color);
`;

const Text = styled.p`
  color: var(--text-color);

  font-size: ${() => clampBuilder(920, 1200, 1, 2)};
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
    </StyledHeader>
  );
}

export default Header;
