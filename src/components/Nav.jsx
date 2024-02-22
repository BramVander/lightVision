import { NavLink, useNavigate } from "react-router-dom";

import Button from "./Button";

import styles from "./Nav.module.css";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <a href="/">
        <img className={styles.logo} src="/lightvi.png" alt="Light Vi Logo" />
        <p >LightVi</p>
      </a>

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <Button
          text={"book"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/pricing");
          }}
        />
      </ul>
    </nav>
  );
}

export default Nav;
