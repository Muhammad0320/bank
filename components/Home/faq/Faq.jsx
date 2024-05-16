'use client';

import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import { HeadingWrapper } from '../products/HeadingWrapper';
import { H2 } from '../../ui/H2';
import { TextGradient } from '../../ui/TextGradient';
import { Text } from '../../ui/Text';

const SectionContainer = styled.section`
  display: flex;
  flex-flow: column;

  gap: ${() => ClampComponent(920, 1200, 4, 6)};
`;

const ContentContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(920, 1200, 2.5, 4)};
`;

const QuestionCard = styled.li`
  padding: ${() => ClampComponent(920, 1200, 2.5, 4)};

  border: 1px solid var(--black-color-light);
  display: flex;
  flex-flow: column;
  gap: ${() => ClampComponent(920, 1200, 1.6, 3)};
  box-shadow: var(--box-shadow-dark);

  & > h4 {
    border-bottom: 1px solid var(--black-color-light);
  }
`;

function Faq() {
  return (
    <SectionContainer>
      <HeadingWrapper>
        <H2>
          <TextGradient> Frequently </TextGradient> Asked Questions.
        </H2>

        <Text color="dark">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </Text>
      </HeadingWrapper>

      <ContentContainer>
        <QuestionCard>
          <Text as="h4" type="head">
            {' '}
            How do I open an account with YourBank{' '}
          </Text>
          <Text>
            Opening an account with YourBank is easy. Simply visit our website
            and click on the &ldquo;Open an Account&ldquo; button. Follow the
            prompts, provide the required information, and complete the
            application process. If you have any questions or need assistance,
            our customer support team is available to help.
          </Text>
        </QuestionCard>
      </ContentContainer>
    </SectionContainer>
  );
}

export default Faq;
