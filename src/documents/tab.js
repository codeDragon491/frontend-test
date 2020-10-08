import React from "react";
import PropTypes from "prop-types";
import styles from "./tabs.module.scss";

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.number.isRequired,
    document: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { document, onClick } = this.props;
    onClick(document.id);
  };

  render() {
    const {
      onClick,
      props: { activeTab, document },
    } = this;

    let className = styles.tabListItem;

    if (activeTab === document.id) {
      className += ` ${styles.tabListItem_active}`;
    }

    return (
      <div className={className} onClick={onClick}>
        {document.title}{" "}
      </div>
    );
  }
}

export default Tab;
