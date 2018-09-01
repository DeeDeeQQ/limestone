import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";

const App = props => (
  <Router basename={props.path}>
    <Route
      exact
      path="/"
      render={() => (
        <Navigation
          CompanyName="companyname"
          CompanyId="id"
          imageSrc="./images/image.jpg"
        />
      )}
    />
  </Router>
);

export default App;
