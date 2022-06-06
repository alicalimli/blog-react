import React, { Component } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
