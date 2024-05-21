'use client';

import { Text } from '../../ui/Text';
import NavLinks from '../../NavLinks';
import styled from 'styled-components';
import Msg from '/public/assets/icons/msg.svg';
import Phone from '/public/assets/icons/phone.svg';
import { SmallFlex, TinyFlex } from '../../ui/flex';
import { IconContainer } from '../../ui/IconContainer';
import Twitter from '/public/assets/icons/twitter.svg';
import Linkedin from '/public/assets/icons/linkedin.svg';
import Location from '/public/assets/icons/location.svg';
import Facebook from '/public/assets/icons/facebook.svg';
import { ClampComponent } from '../../../styles/clampBuilder';

const FooterContainer = styled.footer`
  background-color: var(--card-color);

  padding: ${() => ClampComponent(320, 1200, 1.5, 3)};
`;

const ContentContainer = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;

  flex-flow: column;

  align-items: center;

  gap: ${() => ClampComponent(320, 1200, 1.5, 3)};

  & > ul:last-child {
    border-block: 1px solid var(--black-color-light);

    padding-block: ${() => ClampComponent(920, 1200, 1, 2)};

    margin-bottom: ${() => ClampComponent(920, 1200, 1, 2.5)};
  }
`;

const CopyRight = styled.div`
  background-color: var(--black-color);

  border-radius: 3.6rem;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: ${() => ClampComponent(920, 1200, 1, 2)};
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <img src="/assets/images/logo.png" alt="YourBank Logo " />

        <NavLinks />

        <SmallFlex>
          <TinyFlex>
            <Msg /> <span>hello@yourbank.com</span>
          </TinyFlex>
          <TinyFlex>
            <Phone /> <span>+234 91 6653 7641</span>
          </TinyFlex>
          <TinyFlex>
            <Location /> <span> Somewhere on Earth </span>
          </TinyFlex>
        </SmallFlex>
      </ContentContainer>

      <CopyRight>
        <TinyFlex>
          <IconContainer type="sm">
            <Facebook />
          </IconContainer>
          <IconContainer type="sm">
            <Twitter />
          </IconContainer>
          <IconContainer type="sm">
            <Linkedin />
          </IconContainer>
        </TinyFlex>

        <Text color="dark"> YourBank All Rights Reserved </Text>

        <Text color="dark"> Privacy Policy | Terms of Service </Text>
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;
