import styled, { keyframes } from 'styled-components';
import { ClampComponent } from '../../styles/clampBuilder';

export const X4Grid = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: repeat(2, 1fr);

  gap: ${() => ClampComponent(320, 1200, 2.5, 3)};
`;

const dash = keyframes`
  
  0% {
    left: -2px; /* Hides the first dash initially */
  }
  100% {
    left: 100%; /* Moves the dash to the right, creating a dash effect */
  }

`;

export const DashedLine = styled.div`
  position: relative; /* Required for proper positioning of the pseudo-element */
  content: ''; /* Empty content for the pseudo-element */
  display: block; /* Makes the pseudo-element behave like a block-level element */
  width: 100%; /* Adjust width as needed */
  height: 1px; /* Sets the height of the line */
  background-color: #ccc; /* Adjust color as needed */

  &::after {
    content: ' '; /* Adds a space to create a gap between dashes */
    display: inline-block; /* Makes the pseudo-element behave like an inline element */
    position: absolute; /* Positions the pseudo-element on top of the main element */
    top: 0; /* Aligns the pseudo-element to the top of the main element */
    left: 0; /* Aligns the pseudo-element to the left of the main element */
    width: 2px; /* Width of each dash */
    height: 100%; /* Height of each dash (full height of the line) */
    background-color: transparent; /* Makes the space between dashes invisible */
    margin-left: 2px; /* Creates space between dashes */
    animation: ${dash} 1.5s steps(4, jump-end) infinite;
  }
`;
