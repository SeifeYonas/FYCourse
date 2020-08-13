import React, { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
//you would import the css file here
//Has to be the same casing as functional component.
//import HomePage from './Components/HomePage';
import HomePage from "./Components/HomePage.js";
import SignUpPage from "./Components/SignUpPage.js";
import LogInPage from "./Components/LogInPage.js";
import AboutUsPage from "./Components/AboutUsPage";
import CoursePage from "./Components/CoursePage";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
function App() {
  useEffect(() => {
    axios
      .get("http://localhost:9000/testAPI")
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/SignUpPage" component={SignUpPage} />
          <Route path="/LogInPage" component={LogInPage} />
          <Route path="/AboutUsPage" component={AboutUsPage} />
          <Route path="/CoursePage" component={CoursePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
