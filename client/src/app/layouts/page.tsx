import { Header }  from './components/header.tsx';
import { Footer } from './components/footer.tsx';
import { Navbar } from './components/navbar.tsx';

/*** Main Page Layout ***/
function Page(props) {
  let year = 2026;
  return (
    <div id="page" className={"layout"}>
      <Header />  
      <Navbar />      
      {props.children}
      <Footer />
    </div>
  )
}

export default Page;
