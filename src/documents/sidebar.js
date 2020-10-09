import React from "react";
import PropTypes from "prop-types";
import styles from "./sidebar.module.scss";
import icon_arrow from "../assets/icons/icon-arrow.png";
import icon_comment from "../assets/icons/icon-comment.png";
import icon_add from "../assets/icons/icon-add.png";
import icon_trash from "../assets/icons/icon-trash.png";

class Sidebar extends React.Component {
  static propTypes = {
    document: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      addComment: false,
      viewComment: false,
      value: "Skriv kommentar her...",
      comment: null,
      errorMessage: undefined,
      isLoaded: false,
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  toggleMenu = (action) => {
    const { isOpen } = this.state;
    if (isOpen === false) this.setState({ isOpen: true });
    else this.setState({ isOpen: false });
    if (action === "addComment") this.setState({ addComment: true });
    else this.setState({ addComment: false });
    if (action === "viewComment") this.setState({ viewComment: true });
    else this.setState({ viewComment: false });
  };
  saveComment = (event) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        document: "/api/documents/" + this.props.document.id,
        content: this.state.value,
      }),
    };
    fetch("http://api.edelmann.co.uk/api/notes", requestOptions)
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        this.setState({ comment: data, value: "Skriv kommentar her..." });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
      });
    event.preventDefault();
  };
  render() {
    const {
      toggleMenu,
      handleChange,
      saveComment,
      state: { isOpen, addComment, viewComment, value, comment },
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
          <form>
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
              <button onClick={saveComment} className={styles.button_save}>
                Gem
              </button>
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
        <div
          style={{
            visibility: isOpen && viewComment ? "visible" : "hidden",
          }}
          className={styles.frame_comment}
        >
          <form>
            <textarea
              className={`${isOpen && viewComment ? styles.isShown : null}`}
              value={`${comment ? comment.content : ""}`}
              onChange={handleChange}
            />
            <div
              className={`${styles.actions} ${
                isOpen && viewComment ? styles.isShown : null
              }`}
            >
              <button onClick={saveComment} className={styles.button_save}>
                Gem
              </button>
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
          {comment && (
            <img
              onClick={() => toggleMenu("viewComment")}
              className={styles.icon}
              src={icon_comment}
              alt="icon-comment"
            />
          )}
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
