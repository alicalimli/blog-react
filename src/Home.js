import React from "react";
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Day 1 of Learning React",
      body: "Here's what i've learned in my day 1",
      author: "Ali Calimli",
      id: 1,
    },
    {
      title: "Day 1 of Learning React",
      body: "Here's what i've learned in my day 1",
      author: "Ali Calimli",
      id: 1,
    },
    {
      title: "Day 1 of Learning React",
      body: "Here's what i've learned in my day 1",
      author: "Ali Calimli",
      id: 1,
    },
    {
      title: "Day 1 of Learning React",
      body: "Here's what i've learned in my day 1",
      author: "Ali Calimli",
      id: 1,
    },
  ]);

  return (
    <div className="home-page">
      <div className="blog-container">
        {blogs.map((blogData) => (
          <div className="blog-preview" key={blogData.key}>
            <h2>{blogData.title}</h2>
            <p>Author {blogData.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
