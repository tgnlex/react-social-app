import type { FlexDir } from '../../types/style.ts';
import { styled } from '@linaria/react';


const Form = styled.form<{direction?: FlexDir; fieldWidth?: string}>`
  --font-size: 1.4em;
  --gap: 3vh;
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  font-size: var(--font-size);
  justify-content: center;
  align-items: center; 
  gap: var(--gap);
  & .field {
  
    --field-border: 1px solid black;
    --default--field-width: 60%;
    --field-width: ${props => props.fieldWidth || "var(--default--field-width)"}
    display: inline-block;
    border: var(--field-border);
    width: var(--field-width);  
    border: var(--field-border);
    border-radius: 0.4rem;
    padding: 0.5em
  }
  & .submit { border-radius: 0.4rem } 
  @media screen & (max-width < 600) {
    --default--field-width: 80%;
    --font-size: 1.2em;     
  };
`;

export { Form };
