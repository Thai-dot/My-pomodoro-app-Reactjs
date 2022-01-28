import React from "react";
import Main from "./components/Main";
//import Navbar from "./components/Navbar";
import About from "./components/About";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import Error from "./components/Error";
import { Notifications } from 'react-push-notification';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Notifications/>
      <div className="flex">
        <Sidebar className="fixed" />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
