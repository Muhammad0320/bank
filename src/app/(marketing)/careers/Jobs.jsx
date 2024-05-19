'use client';

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

  /* grid-template-columns: repeat(auto-fit, minmax(min(70rem, 100%), 1fr)); */
  grid-template-columns: repeat(2, 1fr);

  /* grid-template-rows: auto; */

  gap: ${() => ClampComponent(320, 1200, 1.8, 2.5)};
`;

const JobContainerItem = styled.li`
  display: flex;

  background-color: var(--card-color);

  border: 1px solid var(--black-color-light);

  border-radius: 1.4rem;

  box-shadow: var(--box-shadow-dark);

  flex-flow: column;

  gap: ${() => ClampComponent(320, 1200, 2, 3)};

  padding: ${() => ClampComponent(320, 1200, 2.5, 3.5)};

  & > button {
    align-self: flex-start;
  }
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
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Department: Retail Banking </Text>
            </NormalFlex>
          </ItemSection>

          <ItemSection>
            <H4>About this job</H4>

            <Text color="dark">
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
              <Text color="dark">
                {' '}
                Bachelor&apos;s degree in Business, Finance, or a related field{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Proven track record of meeting and exceeding sales target
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Minimum of 5 yrs of experience in salesor relationship
                management in banking industry{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Excellent interpersonal and negotoation skills
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Strong knowledge of banking products and services{' '}
              </Text>
            </SmallFlex>
          </ItemSection>

          <Button>Apply Now!</Button>
        </JobContainerItem>

        <JobContainerItem>
          <ItemSection>
            <H3>Risk Analyst</H3>

            <NormalFlex type="container">
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Department: Risk Management </Text>
            </NormalFlex>
          </ItemSection>

          <ItemSection>
            <H4>About this job</H4>

            <Text color="dark">
              As a Risk Analyst at YourBank, you will play a vital role in
              identifying and assessing potential risks to our organization. You
              will analyze data, conduct risk assessments, and develop
              strategies to mitigate risks. We are looking for detail-oriented
              individuals with strong analytical skills and a solid
              understanding of risk management principles.
            </Text>
          </ItemSection>

          <ItemSection>
            <H4> Requirement & Qualification </H4>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Bachelor&apos;s degree in Finance, Econimics or a related field{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                Minimum of 2 yrs of exprience in risk management or a similar
                role
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Proficiency in risk analysis tools and techniques{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Strong analytical and problem solving skills
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Knowledge of regulatory requirement and industry best practices
              </Text>
            </SmallFlex>
          </ItemSection>

          <Button>Apply Now!</Button>
        </JobContainerItem>

        <JobContainerItem>
          <ItemSection>
            <H3> IT Security Specialist </H3>

            <NormalFlex type="container">
              <Text type="sm"> Location: Nigeria </Text>
              <Text type="sm"> Department: Information Technology </Text>
            </NormalFlex>
          </ItemSection>

          <ItemSection>
            <H4>About this job</H4>

            <Text color="dark">
              As an IT Security Specialist at YourBank, you will be responsible
              for ensuring the security and integrity of our information
              systems. You will develop and implement security protocols,
              conduct vulnerability assessments, and respond to security
              incidents. We are seeking individuals with a strong technical
              background, knowledge of cybersecurity best practices, and a
              commitment to maintaining the confidentiality of customer data.
            </Text>
          </ItemSection>

          <ItemSection>
            <H4> Requirement & Qualification </H4>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Bachelor&apos;s degree in Computer Science, Information
                Security, or other related fields
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                Minimum of 5 yrs of expereice in IT security or a similar role
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                In-depth knowledge of network security protocols and
                technologies
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Familiarity with regulatory frameworks such as PCI, DSS and GDPR{' '}
              </Text>
            </SmallFlex>

            <SmallFlex>
              <Breifcase />
              <Text color="dark">
                {' '}
                Professional certification such as CISSP or CISM are preferred{' '}
              </Text>
            </SmallFlex>
          </ItemSection>

          <Button>Apply Now!</Button>
        </JobContainerItem>
      </JobContainer>
    </SectionContainer>
  );
}

export default Jobs;
