import styled from 'styled-components';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { ClampComponent } from '../../../../styles/clampBuilder';
import { H3, H4 } from '../../../../components/ui/H2';
import Breifcase from '/public/assets/icons/breifcase.svg';

import { NormalFlex, SmallFlex } from '../../../../components/ui/flex';
import { Text } from '../../../../components/ui/Text';
import { Button } from '../../../../components/ui/Button';

const JobContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(70rem, 100%), 1fr));

  gap: ${() => ClampComponent(320, 1200, 1.8, 2.5)};
`;

const JobContainerItem = styled.li`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 2, 3)};

  padding: ${() => ClampComponent(320, 1200, 2.5, 3.5)};
`;

const ItemSection = styled.div`
  display: flex;

  flex-flow: column;

  gap: ${() => ClampComponent(320, 1200, 1, 2)};
`;

function Jobs() {
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Job Openings">
        Explore exciting job openings at YourBank, where we value talent,
        innovation, and a passion for customer service. Join our team and be
        part of shaping a brighter future in the banking industry
      </HeadingTextContainer>

      <JobContainer>
        <JobContainerItem>
          <ItemSection>
            <H3>Relationship Manager</H3>

            <NormalFlex type="container">
              <Text> Location: Nigeria </Text>
              <Text> Department: Retail Banking </Text>
            </NormalFlex>
          </ItemSection>

          <ItemSection>
            <H4>About this job</H4>

            <Text>
              As a Relationship Manager at YourBank, you will be responsible for
              developing and maintaining relationships with our valued
              customers. You will proactively identify their financial needs and
              offer tailored solutions to help them achieve their goals. We are
              seeking individuals with excellent communication skills, a strong
              sales acumen, and a passion for delivering exceptional customer
              service.
            </Text>
          </ItemSection>

          <ItemSection>
            <H4> Requirement & Qualification </H4>

            <SmallFlex>
              <Breifcase />
              <Text>
                {' '}
                Bachelor'sdegree in Business, Finance, or a related field{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text>
                {' '}
                Bachelor'sdegree in Business, Finance, or a related field{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text>
                {' '}
                Minimum of 5 yrs of experience in salesor relationship
                management in banking industry{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text> Excellent interpersonal and negotoation skills</Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text> Strong knowledge of banking products and services </Text>
            </SmallFlex>
          </ItemSection>

          <Button>Apply Now!</Button>
        </JobContainerItem>
      </JobContainer>
    </SectionContainer>
  );
}

export default Jobs;
