'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { ClampComponent } from '../../styles/clampBuilder';

const StyledNavLink = styled(Link)`
  font-size: ${() => ClampComponent(320, 1200, 1.3, 2.2)};

  color: var(--text-color);

  border-radius: 3.6rem;
  padding-inline: ${() => ClampComponent(320, 1200, 1.4, 2)};

  padding-block: ${() => ClampComponent(320, 1200, 0.8, 1.2)};

  transition: background-color 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  .active {
    background-color: var(--card-color);
  }
`;

function NavLink({ href, children }) {
  const path = usePathname();

  console.log(path);

  const isActive = path === href ? 'active' : '';

  return (
    <StyledNavLink href={href} className={isActive}>
      {children}
    </StyledNavLink>
  );
}

export default NavLink;
