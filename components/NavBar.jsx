'use client';

import Image from 'next/image';

import Hamburger from '/public/assets/icons/hamburger.svg';
import Logo from '/public/assets/images/logo.png';
import styled from 'styled-components';
import { Button } from './ui/Button';
import NavLinks from './NavLinks';
import { ClampComponent } from '../styles/clampBuilder';
import Link from 'next/link';

const StyledHeading = styled.nav`
  z-index: 10;

  display: flex;

  backdrop-filter: blur(4px);

  /* position: fixed; */

  /* width: 100%; */

  justify-content: space-between;
  margin-inline: 1.5rem;
  align-items: center;

  padding-inline: 1.4rem;

  padding-block: ${() => ClampComponent(920, 1200, 1, 1.2)};

  border-radius: 3.6rem;

  border: 1px solid var(--card-color);
`;

const HeaderButtonContainer = styled.div`
  display: flex;

  flex-wrap: nowrap;

  /* & > * {
    flex: 1;

    min-width: fit-content;
  } */
`;

function NavBar() {
  return (
    <StyledHeading>
      <Link
        href={'/'}
        style={{
          position: 'relative',
          width: '13.5rem',
          height: '3.5rem',
        }}
      >
        <Image
          src={Logo}
          alt="YourBank Logo "
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </Link>

      <NavLinks />

      <HeaderButtonContainer>
        <Button kind="null">Signup</Button>

        <Button kind="auth"> Login</Button>
      </HeaderButtonContainer>
    </StyledHeading>
  );
}

export default NavBar;
