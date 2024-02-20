import { useState } from "react";
import DatePicker from "react-datepicker";

import Message from "./Message";
import Button from "./Button";

import "react-datepicker/dist/react-datepicker.css";
import styles from "../pages/Contact.module.css";

function ContactForm() {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Scheduled!");
  }

  if (message) return <Message className={styles.message} message={message} />;

  return (
    <>
      <form className={styles.demo} onSubmit={handleSubmit}>
        <h2 className={styles.title}>I'd like to book a demo</h2>

        <label htmlFor="name">Name</label>
        <input required id="name" placeholder="Bram Vander" />

        <label htmlFor="phone">Phone</label>
        <input required id="phone" placeholder="+31 " />

        <label>Pick a date</label>
        <DatePicker
          className={styles.datepicker}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd/MM/yyyy"}
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          required
          id="notes"
          placeholder="I want to measure {UGR, Lux, color...}"
        />

        <div>
          <Button className={styles.btn} text={"Schedule"} color={"white"} />
        </div>
      </form>
    </>
  );
}

export default ContactForm;
