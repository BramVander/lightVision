import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ marginBlockEnd: "10rem" }}>
          <h1 className={styles.pricingTitle}>Just $9/month, subscribe now</h1>

          <p className={styles.pricingText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </section>

        <section style={{ margin: "auto", width: "50%" }}>
          <h2>Why do I want a measurement?</h2>
          <p>
            Within the EU, every manufacterer or dealer in the lighting industry
            needs to adhere to European standards;{" "}
            <strong>
              failure to do so will result in the disallowance of your
              (web)shop.
            </strong>
          </p>
          <p>Mandatory prerequisites</p>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCircleExclamation}
              />
              &nbsp; Register the product at the European databank for energy
              labeling (
              <a href="https://eprel.ec.europa.eu/screen/home" target="_blank">
                EPREL
              </a>
              )
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCircleExclamation}
              />
              &nbsp; Free provision of labeling, product information & technical
              documentation sheets
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCircleExclamation}
              />
              &nbsp; Ensure that every product is provided with an energy label
              that meets the requirements
            </li>
            <li>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCircleExclamation}
              />
              &nbsp; Ensure visibility as well as legibility for the label in
              the store or on the webshop
            </li>
          </ul>

          <p>
            You can even send us a product and we will get back to you with your
            results
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
