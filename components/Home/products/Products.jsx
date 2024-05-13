import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';

const SectionContainer = styled.section`
  margin-block: ${() => ClampComponent(320, 1200, 4, 6)};

  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
`;

const ProductH2 = styled.h2`
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
  return <div></div>;
}

export default Products;
