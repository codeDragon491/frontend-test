import React from "react";
import PropTypes from "prop-types";
import styles from "./tabs.module.scss";
import logo from "../assets/icons/icon-logo.png";
import Tab from "./tab.js";
import Sidebar from "./sidebar.js";

class Tabs extends React.Component {
  static propTypes = {
    documents: PropTypes.instanceOf(Array).isRequired,
  };
  
  state = {
    activeTab: this.props.documents[0].id,
  };
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { documents },
      state: { activeTab },
    } = this;
    return (
      <div className={styles.tabs}>
        <div className={styles.tabMenu}>
          <div className={styles.tabList}>
            {" "}
            {documents.map((document) => (
              <Tab
                document={document}
                key={document.id}
                activeTab={activeTab}
                onClick={onClickTabItem}
              ></Tab>
            ))}{" "}
          </div>{" "}
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>{" "}
        </div>{" "}
        {documents.map((document) => {
          if (document.id !== activeTab) return undefined;
          return (
            <div className={styles.tabContent} key={document.id}>
              <h1> {document.title} </h1>{" "}
              <p className={styles.documentContent}> {document.content} </p>{" "}
              <Sidebar document={document}></Sidebar>
            </div>
          );
        })}{" "}
      </div>
    );
  }
}
export default Tabs;
