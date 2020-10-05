import React from "react";
import "./App.scss";
import Documents from "./documents";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/browse-legal-documents" exact />{" "}
        <Route path="/browse-legal-documents" component={Documents} />
      </Router>
    </div>
  );
}

export default App;
