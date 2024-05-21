'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { ClampComponent } from '../../styles/clampBuilder';

const StyledNavLink = styled.li`
  font-size: ${() => ClampComponent(320, 1200, 1.3, 2.2)};

  color: var(--text-color);

  border-radius: 3.6rem;
  padding-inline: ${() => ClampComponent(320, 1200, 1.4, 2)};

  padding-block: ${() => ClampComponent(320, 1200, 0.8, 1.2)};

  transition:
    background-color 350ms cubic-bezier(0.215, 0.61, 0.355, 1),
    opacity 300ms ease-in-out;

  &::after {
    width: 100%;

    height: 1px;

    background-image: var(--primary-gradient);

    scale: 0 1;

    transition:
      scale 250ms,
      translate 350ms;
  }

  &:hover::after,
  &.active {
    /* background-color: var(--card-color); */

    scale: 1 1;
  }

  &:not(:hover) {
    opacity: 0.8;
  }

  &:hover + &::after {
    translate: -100%;
  }

  &:has(+ :hover)::after {
    translate: 100%;
  }
`;

function NavLink({ href, children }) {
  const path = usePathname();

  const isActive = path === href ? 'active' : '';

  return (
    <StyledNavLink className={isActive}>
      <Link href={href}> {children} </Link>
    </StyledNavLink>
  );
}

export default NavLink;
