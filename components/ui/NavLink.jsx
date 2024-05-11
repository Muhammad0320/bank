'use client'

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";


const StyledNavLink = styled(Link)`
    
    font-size:  ${() => clampBuilder(320, 1200, 1.3, 2.2)};

color: var(--text-color); 

&:hover,
.active{    

    

    background-color: var(--card-color) ;

    border-radius: 3.6rem;

    padding-inline:  ${() => clampBuilder(320, 1200, 1.4, 2)};
    padding-inline:  ${() => clampBuilder(320, 1200, 1, 1.4)};

}


`;


function NavLink({href, children}) {

    const path = usePathname()

    const isActive = path === href ? 'active' : '' ;



    return (
        <StyledNavLink href={href} className={isActive} >
            {children}
        </StyledNavLink>
    )
}

export default NavLink
