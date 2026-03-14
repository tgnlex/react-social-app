import type { FlexDir } from '../../types/style.ts';
import { styled } from '@linaria/react';


const Form = styled.form<{direction?: FlexDir; fieldWidth?: string}>`
  --default--field-width: 60%;
  --field-width: ${props => props.fieldWidth || "var(--default--field-width)"}
  --field-border: 1px solid transparent;
  --font-size: 1.4em;
  display: flex;
  flexDirection: ${props => props.direction || "column"};
  font-size: var(--font-size);
  justify-content: center;
  align-items: center; 

  & .form-control, .field {
    display: inline-block;
    border: var(--field-border);
    width: var(--field-width);   
  }
  
  @media screen & (max-width < 600) {
    --default--field-width: 80%;
    --font-size: 1.2em;     
  };
`;

export { Form };
