import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <FontAwesomeIcon className={styles.icon} icon={faEnvelopeCircleCheck} />{" "}
      {message}
    </p>
  );
}

export default Message;
