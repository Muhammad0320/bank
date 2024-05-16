import styled from 'styled-components';
import { ClampComponent } from '../../../styles/clampBuilder';

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

const ContactInfo = styled.ul`
  display: flex;

  gap: ${() => ClampComponent(320, 1200, 0.8, 1.2)};

  align-items: center;
`;

const ContactItem = styled.li`
  display: flex;

  gap: ${() => ClampComponent(920, 1200, 0.4, 0.8)};

  justify-content: center;

  align-items: center;
`;

function Footer() {
  return <FooterContainer></FooterContainer>;
}

export default Footer;
