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


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar--list">
        <NavItem text={"Home"} href={"/"} />
      </ul>
    </nav>
  )
}

export default Navbar;
