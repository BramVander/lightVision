import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        Copyright @ <a href="/">LightVi</a>
      </p>
    </footer>
  );
}

export default Footer;
