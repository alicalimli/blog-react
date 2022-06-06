import React, { Component } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/create">
                <Create></Create>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
