import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1>Blogs</h1>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/create">New Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
