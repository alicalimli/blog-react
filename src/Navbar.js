import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1>Blogs</h1>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="/">Home</a>
        </li>
        <li className="nav-link">
          <a href="/create">New Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
