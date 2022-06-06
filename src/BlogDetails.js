import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const {id } = useParams();
  const {data: blogData, isPending, errorMessage} = useFetch(`http://localhost:8000/blogs/${id}`)

  return (  
    <div className="blog-details">
      {errorMessage && <h2>errorMessage</h2> }
      {isPending && <h2>Loading...</h2> }
      {blogData && (
        <article className="blog-container">
          <div className="blog-title-container">
            <h1 className="blog-title">{blogData.title}</h1>
            <p className="blog-author">Author: {blogData.author}</p>
          </div>
          <p className="blog-body">{blogData.body}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;