'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import { Text } from '../../ui/Text';

const SectionContainer = styled.section`
  margin-block: ${() => ClampComponent(320, 1200, 4, 6)};

  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
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

const H2 = styled.h2`
  font-size: ${() => ClampComponent(320, 1200, 2, 3)};
`;

const TextContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 1, 2)};
`;

const ContentContainer = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 1fr;
`;

const ProdContainer = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: 2rem;

  align-items: center;
`;

function Products() {
  return (
    <SectionContainer>
      <TextContainer>
        <TextWrapper>
          <H2> Our Products</H2>

          <Text>
            Discover a range of comprehensive and customizable banking products
            at YourBank, <br /> designed to suit your unique financial needs and
            aspirations
          </Text>
        </TextWrapper>

        <ProductCategory>
          <span className="active">For Individual</span>

          <span>For Business</span>
        </ProductCategory>
      </TextContainer>

      <ContentContainer>
        <ProdContainer></ProdContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Products;
