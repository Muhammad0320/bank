import styled from 'styled-components';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { ClampComponent } from '../../../../styles/clampBuilder';
import { H3, H4 } from '../../../../components/ui/H2';
import { NormalFlex } from '../../../../components/ui/flex';
import { Text } from '../../../../components/ui/Text';

const JobContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(70rem, 100%), 1fr));

  gap: ${() => ClampComponent(320, 1200, 1.8, 2.5)};
`;

const JobContainerItem = styled.li`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 2, 3)};
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

            <NormalFlex>
              <Text> Location: Nigeria </Text>
              <Text> Department: Retail Banking </Text>
            </NormalFlex>
          </ItemSection>

          <ItemSection>
            <H4>About this job</H4>

            <Text></Text>
          </ItemSection>
        </JobContainerItem>
      </JobContainer>
    </SectionContainer>
  );
}

export default Jobs;
