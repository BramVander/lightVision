import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <Nav />

      <main>
        <section className={styles.contact}>
          <div className={styles.text}>
            <h2>Hello</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            facilis tempore eum alias doloribus ea cumque blanditiis iusto
            maxime laborum quod sit enim nemo, hic ipsum natus ullam fuga ut ex
            molestiae. Exercitationem nihil, magni nesciunt earum, velit
            perferendis nemo, enim ratione sit officiis perspiciatis recusandae
            quae soluta aperiam debitis? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Corrupti facilis tempore eum alias doloribus ea
            cumque blanditiis iusto maxime laborum quod sit enim nemo, hic ipsum
            natus ullam fuga ut ex molestiae.
          </div>
          <div className={styles.formcontainer}>
            <ContactForm />
          </div>
        </section>
      </main>

      <section className={styles.map}>
        <Map />
      </section>

      <Footer />
    </>
  );
}

export default Contact;
