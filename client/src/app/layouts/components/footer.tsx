import { Copyright} from '../text/symbols.tsx';
import { NumString } from "$lib/types.ts";

interface FooterProps {
  year: number | NumString;
  style?: object;
}
function Footer(props: FooterProps) {      
  const year = props.year || 2026;
  const style = props.style || {};
  const classes = { component: "footer", text: "text" };
  return (
    <footer className={classes.component} style={style}>
       <small className={classes.text}><Copyright/>{year}</small>
    </footer>

  )
}

export { Footer };
