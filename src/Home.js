import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

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
      id: 2,
    },
    {
      title: "Day 1 of Learning React",
      body: "Here's what i've learned in my day 1",
      author: "Ali Calimli",
      id: 3,
    },
    {
      title: "Day 1 of Learning React",
      body: "Here's what i've learned in my day 1",
      author: "Ali Calimli",
      id: 4,
    },
  ]);

  const deleteBlog = function (blogId) {
    const newBlogs = blogs.filter((blogData) => blogData.id !== blogId);
    console.log(blogId);
    setBlogs(newBlogs);
  };

  return (
    <div className="home-page">
      <div className="blog-container">
        <BlogList
          blogs={blogs}
          title="All the Blogs"
          deleteBlog={deleteBlog}
        ></BlogList>
      </div>
    </div>
  );
};

export default Home;
