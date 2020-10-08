import React from "react";
import styles from "./sidebar.module.scss";
import icon_arrow from "../assets/icons/icon-arrow.png";
import icon_comment from "../assets/icons/icon-comment.png";
import icon_add from "../assets/icons/icon-add.png";

class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.icons}>
          <img
            className={`${styles.arrow_up} ${styles.icon}`}
            src={icon_arrow}
            alt="arrow-up"
          />
          <img className={styles.icon} src={icon_comment} alt="icon-comment" />
          <img className={styles.icon} src={icon_add} alt="icon-add" />
          <img className={styles.icon} src={icon_arrow} alt="icon-add" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
