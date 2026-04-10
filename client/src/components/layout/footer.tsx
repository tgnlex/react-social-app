import { Copyright} from '../../components/text/symbols.tsx';
import type { NumString } from "@/types/index.ts";

interface FooterProps {
  year: number | NumString;
}
function Footer(props: FooterProps) {      
  const year = props.year || 2026;
  const classes = { component: "footer", text: "text" };
  return (
    <footer id="page--footer" className={classes.component}>
       <small id="footer--text" className={classes.text}><Copyright/>{year}</small>
    </footer>

  )
}

export default Footer;
