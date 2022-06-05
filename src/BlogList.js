import React from "react";

const BlogList = ({ blogs, title, deleteBlog }) => {
  return (
    <div className="container">
      <h1>All Blogs</h1>

      <div className="blog-list">
        {blogs.map((blogData) => (
          <div className="blog-preview" key={blogData.id}>
            <h2>{title}</h2>
            <p>Author {blogData.author}</p>
            <button onClick={() => deleteBlog(blogData.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
