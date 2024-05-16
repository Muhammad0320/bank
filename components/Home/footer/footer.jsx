import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';
import NavLinks from '../../NavLinks';
import Phone from '/public/assets/icons/phone.svg';
import Msg from '/public/assets/icons/msg.svg';
import Location from '/public/assets/icons/location.svg';
import Facebook from '/public/assets/icons/facebook.svg';
import Twitter from '/public/assets/icons/twitter.svg';
import Linkedin from '/public/assets/icons/linkedin.svg';

import { SmallFlex, TinyFlex } from '../../ui/flex';

const FooterContainer = styled.footer`
  background-color: var(--color-card);

  gap: ${() => ClampComponent(320, 1200, 1.5, 3)};
`;

const ContentContainer = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;

  flex-flow: column;

  align-items: center;

  gap: ${() => ClampComponent(320, 1200, 1.5, 3)};

  &:has(ul) ul {
    border-block: 1px solid var(--black-color-light);

    padding-block: ${() => ClampComponent(920, 1200, 1, 2)};
  }
`;

const CopyRight = styled.div`
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
            {' '}
            <Msg /> <span>hello@yourbank.com</span>{' '}
          </TinyFlex>
          <TinyFlex>
            {' '}
            <Msg /> <span>hello@yourbank.com</span>{' '}
          </TinyFlex>
          <TinyFlex>
            {' '}
            <Msg /> <span>hello@yourbank.com</span>{' '}
          </TinyFlex>
        </SmallFlex>
      </ContentContainer>
    </FooterContainer>
  );
}

export default Footer;
