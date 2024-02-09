import Nav from "../components/Nav";

import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <>
      <Nav />
      <main>
        <section>
          <h1 className={styles.pricingTitle}>Just $11/month, subscribe now</h1>

          <p className={styles.pricingText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </section>
      </main>
    </>
  );
}
