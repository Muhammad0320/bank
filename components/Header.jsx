
'use client';

import Image from "next/image";


import Hamburger from '/public/assets/icons/hamburger.svg';
import styled from "styled-components";
import { Button } from "./Button";


const StyledHeader = styled.header`
    

    display: flex;

    justify-content: space-between; 
    margin-inline: 1.5rem;
    align-items: center;

    padding-inline: 1.4rem;

    padding-block: 1.6rem; 

    border-radius: 3.6rem; 

    border: 1px solid var(--card-color);


`;

function Header() {
    return (
        <StyledHeader   >
            <div   >
                <img src='/assets/images/logo.png' alt="YourBank Logo " />
            </div>

                <Button>
                    <Hamburger   />
                </Button> 
        </StyledHeader>
    )
}

export default Header

