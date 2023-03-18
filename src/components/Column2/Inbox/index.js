import React from "react";
import styles from "./styles.module.css";
import Icon from "./icon_clock.png";
import Icon1 from "./Icon-Star.png";
const Inbox = () => {
  return (
    <div className={styles.inbox}>
      <img src={Icon} className={styles.Icon} />
      <p className={styles.Para}>Inbox</p>
      <img src={Icon1} className={styles.Icon2}  />

      <p className={styles.filter}>Filter</p>
      <img src={Icon1} className={styles.Icon2}  />
    </div>
  );
};
export default Inbox;
