'use client';

import Image from 'next/image';

import Hamburger from '/public/assets/icons/hamburger.svg';
import styled from 'styled-components';
import { Button } from './ui/Button';
import NavLinks from './NavLinks';
import { ClampComponent } from '../styles/clampBuilder';

const StyledHeading = styled.nav`
  margin-block-end: ${() => ClampComponent(920, 1200, 4, 10)};

  display: flex;
  position: fixed;
  /* width: 100%; */
  backdrop-filter: blur(4px);
  flex: 1;
  justify-content: space-between;
  margin-inline: 1.5rem;
  align-items: center;

  padding-inline: 1.4rem;

  padding-block: 1.6rem;

  border-radius: 3.6rem;

  border: 1px solid var(--card-color);
`;

const HeaderButtonContainer = styled.div`
  display: flex;

  column-gap: 2rem;
`;

function NavBar() {
  return (
    <StyledHeading>
      <div>
        <img src="/assets/images/logo.png" alt="YourBank Logo " />
      </div>

      <NavLinks />

      <HeaderButtonContainer className="space-x-3">
        <Button kind="null">Signup</Button>

        <Button>Login</Button>
      </HeaderButtonContainer>
    </StyledHeading>
  );
}

export default NavBar;