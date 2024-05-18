'use client';

import { H2 } from './H2';
import { Text } from './Text';
import styled from 'styled-components';
import { TextGradient } from './TextGradient';
import { ClampComponent } from '../../styles/clampBuilder';

export const HeadingWrapper = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 1, 2)};
`;

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

function HeadingTextContainer({
  children,
  withGradient = '',
  withoutGradient = '',
  order = 'normal',
  withCategory = true,
}) {
  return (
    <TextContainer>
      <HeadingWrapper>
        <H2>
          {order === 'normal' ? (
            <>
              {withoutGradient} <TextGradient>{withGradient}</TextGradient>
            </>
          ) : (
            <>
              <TextGradient>{withGradient}</TextGradient> {withoutGradient}
            </>
          )}
        </H2>

        <Text color="dark">{children}</Text>
      </HeadingWrapper>
      {withCategory && (
        <ProductCategory>
          <span className="active">For Individual</span>

          <span>For Business</span>
        </ProductCategory>
      )}
    </TextContainer>
  );
}

export default HeadingTextContainer;
