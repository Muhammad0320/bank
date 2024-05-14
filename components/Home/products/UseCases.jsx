'use client';

import { ClampComponent } from '../../../styles/clampBuilder';
import { Text } from '../../ui/Text';
import { TextGradient } from '../../ui/TextGradient';
import { HeadingWrapper } from './HeadingWrapper';

const SectionContainer = styled.section`
  display: flex;

  flex-flow: column;

  row-gap: ${() => ClampComponent(320, 1200, 2.5, 4)};
`;

function UseCases() {
  return (
    <SectionContainer>
      <HeadingWrapper>
        <Text type="head">
          <TextGradient as="h2"> Use Cases </TextGradient>
        </Text>

        <Text color="dark">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </Text>
      </HeadingWrapper>
    </SectionContainer>
  );
}

export default UseCases;
