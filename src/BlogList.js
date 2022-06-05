import React from "react";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>

      <div className="blog-list">
        {blogs.map((blogData) => (
          <div className="blog-preview" key={blogData.id}>
            <h2>{blogData.title}</h2>
            <p>Author {blogData.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
