'use client';

import NavLink from './ui/NavLink';
import styled from 'styled-components';
import { ClampComponent } from '../styles/clampBuilder';

const NavContainer = styled.ul`
  display: flex;

  column-gap: ${() => ClampComponent(950, 1200, 1.3, 2)};

  font-size: ${() => ClampComponent(320, 1200, 1.3, 2.2)};
`;

function NavLinks() {
  return (
    <NavContainer>
      <li>
        <NavLink href="/"> Home </NavLink>
      </li>
      <li>
        <NavLink href="/careers"> Career </NavLink>
      </li>
      <li>
        <NavLink href="/about"> About </NavLink>
      </li>
      <li>
        <NavLink href="/security"> Security </NavLink>
      </li>
    </NavContainer>
  );
}

export default NavLinks;
