import { useState } from "react";

import Button from "./Button";
import Message from "./Message";

import styles from "./Form.module.css";

function Form() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Quote requested!");
  }

  if (message) return <Message className={styles.message} message={message} />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.title}>I still have questions</div>

        <div className={styles.row}>
          <label htmlFor="name">
            Name
            <input required id="name" />
          </label>

          <label htmlFor="company">
            Company
            <input required id="company" />
          </label>
        </div>

        <div className={styles.row}>
          <label htmlFor="phone">
            Phone
            <input required id="phone" />
          </label>

          <label htmlFor="email">
            Email
            <input required id="email" />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.question} htmlFor="question">
            Question
            <textarea required id="question" placeholder="Ask us anything!" />
          </label>
        </div>

        <div className={styles.submit}>
          <Button
            text={"request quotation"}
            color={"white"}
            borderBottomLeftRadius={"0"}
            borderBottomRightRadius={"0"}
          />
        </div>
      </form>
    </>
  );
}

export default Form;
