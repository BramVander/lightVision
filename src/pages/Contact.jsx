import React, { useState } from "react";
import DatePicker from "react-datepicker";

import Nav from "../components/Nav";
import Map from "../components/Map";
import Button from "../components/Button";
import Message from "../components/Message"

import styles from "./Contact.module.css";
import "react-datepicker/dist/react-datepicker.css";

function Contact() {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Scheduled!");
  }

  if (message) return <Message className={styles.message} message={message} />;

  return (
    <>
      <Nav />
      <section className={styles.contact}>
        <div className={styles.text}>
        <h2>Hello</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti facilis tempore eum alias doloribus ea cumque blanditiis iusto maxime laborum quod sit enim nemo, hic ipsum natus ullam fuga ut ex molestiae. Exercitationem nihil, magni nesciunt earum, velit perferendis nemo, enim ratione sit officiis perspiciatis recusandae quae soluta aperiam debitis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti facilis tempore eum alias doloribus ea cumque blanditiis iusto maxime laborum quod sit enim nemo, hic ipsum natus ullam fuga ut ex molestiae.</div>
        <div className={styles.formcontainer}>
          <form className={styles.demo} onSubmit={handleSubmit}>
          <h2 className={styles.title}>I'd like to book a demo</h2>

          <label htmlFor="name">
            Name
          </label>
          <input required id="name" placeholder="Bram Vander" />

          <label htmlFor="phone">
            Phone
          </label>
          <input required id="phone" placeholder="+31 " />

          <label>Pick a date</label>
          <DatePicker className={styles.datepicker} selected={date} onChange={(date) => setDate(date)} dateFormat={"dd/MM/yyyy"} />

          <label  htmlFor="notes">
            Notes
          </label>
          <textarea required id="notes" placeholder="I want to measure {UGR, Lux, color...}" />

          <div>
            <Button
              className={styles.btn}
              text={"Schedule"}
              color={"white"}
            />
          </div>
        </form>
        </div>
      </section>

      <section className={styles.map}>
        {/* scrollbar weg css'en */}
        <Map />
      </section>
    </>
  );
}

export default Contact;
