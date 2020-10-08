import React from "react";
import PropTypes from "prop-types";
import styles from "./tabs.module.scss";
import logo from "../assets/icons/icon-logo.png";

class Tabs extends React.Component {
  static propTypes = {
    documents: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    const {
      props: { documents },
    } = this;
    return (
      <div className={styles.tabs}>
        <div className={styles.tabMenu}>
          <div className={styles.tabList}>
            {" "}
            {documents.map((document) => (
              <div className={styles.tabListItem}>{document.title}</div>
            ))}{" "}
          </div>{" "}
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Tabs;
