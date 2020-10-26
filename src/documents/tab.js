import React from "react";
import PropTypes from "prop-types";
import styles from "./tabs.module.scss";

function Tab (props) {

  const onClick = () => {
    const { document, onClick } = props;
    onClick(document.id);
  };

    const { activeTab, document } = props;

    let className = styles.tabListItem;

    if (activeTab === document.id) {
      className += ` ${styles.tabListItem_active}`;
    }

    return (
      <div className={className} onClick={()=> onClick(document.id)}>
        {document.title}
      </div>
    );
  }

  Tab.propTypes = {
    activeTab: PropTypes.number.isRequired,
    document: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Tab;
