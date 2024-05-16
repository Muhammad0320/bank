'use client';

import { H2 } from './H2';
import { Text } from './Text';
import styled from 'styled-components';
import { TextGradient } from './TextGradient';

const ProductCategory = styled.div`
  display: flex;
  padding: 1rem;

  border: 1px solid var(--black-color-light);

  border-radius: 3.6rem;

  & > * {
    flex: 1;
    min-width: fit-content;

    color: var(--text-color-light);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1.2rem;
    padding-block: 0.8rem;
    border-radius: 3.6rem;
  }

  & > .active {
    background-image: var(--primary-gradient);
    color: var(--black-color);
  }
`;

const TextContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

function HeadingWrapper({ children, withGradient, withoutGradient }) {
  return (
    <TextContainer>
      <HeadingWrapper>
        <H2>
          {withoutGradient} <TextGradient> {withGradient} </TextGradient>{' '}
        </H2>

        <Text color="dark">{children}</Text>
      </HeadingWrapper>

      <ProductCategory>
        <span className="active">For Individual</span>

        <span>For Business</span>
      </ProductCategory>
    </TextContainer>
  );
}

export default HeadingWrapper;
