/*** PANIC LOG TAG ***/
const PANIC: string = "[PANIC]";
const PANIC_DEFAULT_MESSAGE: string =`
  ${PANIC} HELP! There is an unknown error and I am scared, somebodyc call 911 or call Papa Johns...
`;


function panic(err?: Error | string, cleanup?: Function) {
  
  /*** IF NO ERROR IS PASSED ***/
  if (typeof err === "undefined") { 
    console.error(PANIC_DEFAULT_MESSAGE); 
  }
  
  /*** IF STRING IS PASSED AS ERROR ***/
  else if (typeof err === "string") { 
    console.error(`${PANIC} ${err}`);
  } 

  else {  
    /*** ACTUAL ERROR OBJECT WAS PASSED. ***/
    console.error(`${PANIC} ${err.message}`);
    console.error(`Status: ${err.code}`
  }
  
  /*** RUN CLEANUP CODE ***/
  if (cleanup) cleanup();
  
  /*** EXIT PROCESS ***/
  process.exit(1)
};

export { panic };
