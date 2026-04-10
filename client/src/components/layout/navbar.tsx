type ItemProps = {
  href: string;
  text: string;
}

function NavItem(props: ItemProps) {
  return (
    <li className="item nav-item">
      <a href={props.href} className="link nav-link">{props.text}</a>
    </li>
  )
}


function Navbar(props) {
  return (
    <nav className={props.className}>
      <ul className="navbar--list">
       <NavItem text={"Home"} href={"/dashboard"} />
       <NavItem text={"Profile"} href={"/dashboard/profile"} />
       <NavItem text={"Friends"} href={"/dashboard/friends"} />
      </ul>
    </nav>
  )
}

export default Navbar;
