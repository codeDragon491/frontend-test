import React from "react";
import styles from "./sidebar.module.scss";
import icon_arrow from "../assets/icons/icon-arrow.png";
import icon_comment from "../assets/icons/icon-comment.png";
import icon_add from "../assets/icons/icon-add.png";
import icon_trash from "../assets/icons/icon-trash.png";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      addComment: false,
      viewComment: false,
      value: "Skriv kommentar her...",
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  saveComment = (event) => {
    alert("A comment was submitted: " + this.state.value);
    event.preventDefault();
  };
  toggleMenu = (action) => {
    console.log(action);
    const { isOpen } = this.state;
    if (isOpen === false) this.setState({ isOpen: true });
    else this.setState({ isOpen: false });
    if (action === "addComment") this.setState({ addComment: true });
    else this.setState({ addComment: false });
    if (action === "viewComment") this.setState({ viewComment: true });
    else this.setState({ viewComment: false });
  };
  render() {
    const {
      toggleMenu,
      handleChange,
      saveComment,
      state: { isOpen, addComment, viewComment, value },
    } = this;
    return (
      <div
        className={`${isOpen ? styles.sidebar_isOpen : null} ${styles.sidebar}`}
      >
        <div
          style={{
            visibility: isOpen && addComment ? "visible" : "hidden",
          }}
          className={styles.frame_comment}
        >
          <form onSubmit={saveComment}>
            <textarea
              className={`${isOpen && addComment ? styles.isShown : null}`}
              value={value}
              onChange={handleChange}
            />
            <div
              className={`${styles.actions} ${
                isOpen && addComment ? styles.isShown : null
              }`}
            >
              <button className={styles.button_save}>Gem</button>
              <div className={styles.button_delete}>
                <img
                  className={`${styles.icon}`}
                  src={icon_trash}
                  alt="icon-trash"
                />
              </div>
            </div>
          </form>
        </div>

        <div className={styles.icons}>
          <img
            className={`${styles.arrow_up} ${styles.icon}`}
            src={icon_arrow}
            alt="icon-arrow"
          />
          <img
            onClick={() => toggleMenu("viewComment")}
            className={styles.icon}
            src={icon_comment}
            alt="icon-comment"
          />
          <img
            className={styles.icon}
            src={icon_add}
            alt="icon-add"
            onClick={() => toggleMenu("addComment")}
          />
          <img
            className={`${styles.arrow_down} ${styles.icon}`}
            src={icon_arrow}
            alt="icon-arrow"
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
