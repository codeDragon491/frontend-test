import React from "react";
import styles from "./documents.module.scss";
import Tabs from "./tabs.js";

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      documents: [],
    };
  }
  componentDidMount() {
    fetch("http://api.edelmann.co.uk/api/documents", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            documents: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, documents } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div className={styles.page}>
          <div className={styles.background}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1204 1154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-195.962 -167.085C-300.087 -166.928 -366.124 -62.163 -315.764 22.9957L314.109 1088.06C365.984 1175.79 500.89 1175.58 553.064 1087.7L1186.55 20.7149C1237.2 -64.59 1171.53 -169.156 1067.39 -169L-195.962 -167.085Z"
                fill="#004F54"
                fillOpacity="0.05"
              />
            </svg>{" "}
          </div>{" "}
          <Tabs documents={documents}></Tabs>{" "}
        </div>
      );
    }
  }
}
export default Documents;
