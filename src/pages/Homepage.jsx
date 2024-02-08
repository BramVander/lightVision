import styles from "./Homepage.module.css";

import Nav from "../components/Nav";
import Button from "../components/Button";
import UniquePoints from "../components/UniquePoints";
import Form from "../components/Form";

export default function Homepage() {
  return (
    <>
      <main className={styles.header}>
        <Nav />
        <section className={styles.hero}>
          <h1>Light Measurement Made Easy</h1>
          <p>Order professional lighting measurement</p>
          <Button text={"book now"} />
        </section>
      </main>

      <section className={styles.product}>
        <p
          style={{
            maxWidth: "40%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "2rem",
          }}
        >
          <img src="/LabRailRenser.jpg" style={{ maxHeight: "250px" }} />
          The unique LabRail® system together with a LabSpion goniometer is a
          complete light measurement solution. The 2-axis goniometer enables the
          system to measure the full 3D light distribution of any light source
          giving lighting professionals comprehensive .LDT and .IES files. The
          rail solution allows easy repositioning of the sensor. The sensor
          travels securely on the up to 16 m long rail along the optical axis.
          Once the light source is in place there is no need for further
          alignment of the sensor.
        </p>
        <UniquePoints />
      </section>

      <section className={styles.form}>
        <Form />
      </section>
    </>
  );
}