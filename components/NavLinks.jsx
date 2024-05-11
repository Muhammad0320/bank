'use client';

import styled from 'styled-components';
import { clampBuilder } from '../styles/clampBuilder';
import NavLink from './ui/NavLink';

const NavContainer = styled.ul`
  display: flex;

  column-gap: ${() => clampBuilder(950, 1200, 1.3, 2)};

  font-size: ${() => clampBuilder(320, 1200, 1.3, 2.2)};
`;

function NavLinks() {
  return (
    <nav>
      <NavContainer>
        <li>
          <NavLink href="/"> Home </NavLink>
        </li>
        <li>
          <NavLink href="/career"> Career </NavLink>
        </li>
        <li>
          <NavLink href="/about"> About </NavLink>
        </li>
        <li>
          <NavLink href="/security"> Security </NavLink>
        </li>
      </NavContainer>
    </nav>
  );
}

export default NavLinks;
