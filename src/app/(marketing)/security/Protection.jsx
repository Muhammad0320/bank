import { X4Grid } from '../../../../components/ui/4x4Grid';
import Sec1 from '/public/assets/icons/sec1.svg';
import Sec2 from '/public/assets/icons/sec2.svg';
import Sec3 from '/public/assets/icons/sec3.svg';
import Sec4 from '/public/assets/icons/sec4.svg';

import { Card } from '../../../../components/ui/Card';
import HeadingTextContainer from '../../../../components/ui/HeadingWrapper';
import { SectionContainer } from '../../../../components/ui/SectionContainer';
import { H4 } from '../../../../components/ui/H2';
import { Text } from '../../../../components/ui/Text';

function Protection() {
  return (
    <SectionContainer>
      <HeadingTextContainer withGradient="Protect You" withoutGradient="How We">
        At YourBank, we prioritize the security and confidentiality of your
        financial information. Our state-of-the-art encryption technology and
        stringent data protection measures ensure your assets and transactions
        are safeguarded at all times
      </HeadingTextContainer>

      <X4Grid>
        <Card>
          <Sec1 />
          <H4>Secure Online Banking Platform</H4>
          <Text>
            Our online banking platform is built with multiple layers of
            security to safeguard your information. We utilize industry-standard
            encryption protocols to ensure that your data remains confidential
            and protected during transmission.
          </Text>
        </Card>

        <Card>
          <Sec2 />
          <H4>Multi-Factor Authentication</H4>
          <Text>
            OTo enhance the security of your online banking experience, we
            employ multi-factor authentication. This additional layer of
            security requires you to provide multiple pieces of identification,
            such as a password and a one-time verification code, to access your
            account.
          </Text>
        </Card>

        <Card>
          <Sec2 />
          <H4></H4>
          <Text>
            OTo enhance the security of your online banking experience, we
            employ multi-factor authentication. This additional layer of
            security requires you to provide multiple pieces of identification,
            such as a password and a one-time verification code, to access your
            account.
          </Text>
        </Card>
      </X4Grid>
    </SectionContainer>
  );
}

export default Protection;
