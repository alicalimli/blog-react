import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "ali";
    const lastname = "calimli";
    return (
      <div className="App">
        <div className="content">
          <h1>
            Welcome, {name} {lastname}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
