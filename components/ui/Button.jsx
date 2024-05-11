

// 'use client'

import styled, {css} from "styled-components"
import { clampBuilder } from "../../styles/clampBuilder"




 export const Button = styled.button`


    display: flex;


    justify-content: center;

    align-items: center;


    background-color: var(--primary-color);

    border-radius: 3.6rem; 

    font-size:  ${() => clampBuilder(320, 1200, 1.2, 2)};

    
  ${(props) =>
    props.kind === "null" &&
    css`
      background-color: transparent;
    `}

    padding-inline: ${ () => clampBuilder(950, 1200, 1.2, 1.7) };
    padding-block: ${ () => clampBuilder(950, 1200, 1.1, 1.5) };

`


