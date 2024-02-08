import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Button from "./Button";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <img
          className={styles.logo}
          src="/lightvision.png"
          alt="Light Vision Logo"
        />
        Light Vision
      </a>

      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <Button text={"book"} />
      </ul>
    </nav>
  );
}

export default Nav;
