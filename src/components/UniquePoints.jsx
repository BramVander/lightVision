import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerVertical } from "@fortawesome/free-solid-svg-icons";

import styles from "./Uniquepoints.module.css";

function UniquePoints() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faRulerVertical} /> Never
        measure distance manually again
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faRulerVertical} />{" "}
        Perfect alignment every time
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faRulerVertical} />{" "}
        Repositioning of sensor in only 5 seconds
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faRulerVertical} />{" "}
        Everything from UGR-value to lightcolor
      </p>
    </div>
  );
}

export default UniquePoints;
