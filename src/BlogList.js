import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>

      <div className="blog-list">
        {blogs.map((blogData) => (
            <Link to={`blogs/${blogData.id}`} className="blog-preview" key={blogData.id}>
              <h2>{blogData.title}</h2>
              <p>Author {blogData.author}</p>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
