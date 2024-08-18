export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="/assets/Logo .svg" alt="" />
      </a>
      <ul className="navigation-menu">
        <li>
          <a href="/#"> Home</a>
        </li>
        <li>
          <a href="/#"> About</a>
        </li>
        <li>
          <a href="/#"> Menu</a>
        </li>
        <li>
          <a href="/#"> Reservations</a>
        </li>
        <li>
          <a href="/#"> Order Online</a>
        </li>
        <li>
          <a href="/#"> Login</a>
        </li>
      </ul>

      <button className="hamburger-btn">
        <img src="/assets/hamburger-icon.svg" alt="open navigation" />
      </button>
    </nav>
  );
}
