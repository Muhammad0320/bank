'use client';

import styled from 'styled-components';
import Work from '/public/assets/icons/work.svg';
import Health from '/public/assets/icons/health.svg';
import Retire from '/public/assets/icons/retire.svg';
import { Text } from '../../../../components/ui/Text';
import Compete from '/public/assets/icons/compete.svg';
import { X4Grid } from '../../../../components/ui/4x4Grid';
import { ClampComponent } from '../../../../styles/clampBuilder';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { Card } from '../../../../components/ui/Card';

function Benefits() {
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Benefits" withoutGradient="Our">
        At YourBank, we value our employees and are dedicated to their
        well-being and success. We offer a comprehensive range of benefits{' '}
        <br /> designed to support their personal and professional growth.
      </HeadingTextContainer>

      <X4Grid>
        <Card>
          <Compete />

          <h4>Competitive Compensation</h4>

          <Text color="dark">
            We provide a competitive salary package that recognizes the skills
            and expertise of our employees. YourBank believes in rewarding
            exceptional performance and offering opportunities for financial
            growth.{' '}
          </Text>
        </Card>

        <Card>
          <Health />

          <h4>Health and Wellness</h4>

          <Text color="dark">
            We prioritize the health and well-being of our employees by
            providing comprehensive medical, dental, and vision insurance plans.
            We also offer wellness programs, gym memberships, and resources to
            support a healthy lifestyle.{' '}
          </Text>
        </Card>

        <Card>
          <Retire />

          <h4>Retirement Planning</h4>

          <Text color="dark">
            YourBank is committed to helping employees plan for their future. We
            offer a retirement savings plan with a generous employer match to
            help them build a secure financial foundation for the long term.{' '}
          </Text>
        </Card>

        <Card>
          <Work />

          <h4>Work-Life Balance</h4>

          <Text color="dark">
            We understand the importance of maintaining a healthy work-life
            balance. YourBank offers flexible work arrangements, paid time off,
            parental leave, and other programs that support employees in
            managing their personal and professional commitments.{' '}
          </Text>
        </Card>
      </X4Grid>
    </SectionContainer>
  );
}

export default Benefits;
