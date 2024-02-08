import { useState } from "react";

import Button from "./Button";
import Message from "./Message";

import styles from "./Form.module.css";

function Form() {
  const [message, setMessage] = useState("");

  function handleSubmit() {
    setMessage("Quote requested!");
  }

  if (message) return <Message className={styles.message} message={message} />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>I still have questions</h2>

        <div className={styles.row}>
          <label htmlFor="name">
            Name
            <input id="name" />
          </label>

          <label htmlFor="company">
            Company
            <input id="company" />
          </label>
        </div>

        <div className={styles.row}>
          <label htmlFor="phone">
            Phone
            <input id="phone" />
          </label>

          <label htmlFor="email">
            Email
            <input id="email" />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.question} htmlFor="question">
            Question
            <textarea id="question" placeholder="Ask us anything!" />
          </label>
        </div>

        <div className={styles.submit}>
          <Button text={"request quotation"} />
        </div>
      </form>
    </>
  );
}

export default Form;
