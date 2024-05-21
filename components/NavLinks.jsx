'use client';

import NavLink from './ui/NavLink';
import styled from 'styled-components';
import { ClampComponent } from '../styles/clampBuilder';

const NavContainer = styled.ul`
  display: flex;

  column-gap: ${() => ClampComponent(950, 1200, 1, 1.2)};

  font-size: ${() => ClampComponent(320, 1200, 1, 1.7)};
`;

function NavLinks() {
  return (
    <NavContainer>
      <NavLink href="/"> Home </NavLink>

      <NavLink href="/careers"> Careers </NavLink>

      <NavLink href="/about"> About </NavLink>

      <NavLink href="/security"> Security </NavLink>
    </NavContainer>
  );
}

export default NavLinks;
