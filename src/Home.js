import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, errorMessage} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home-page">
      <div className="blog-container">
        {errorMessage && <h1 style={{textAlign: 'center'}}>{errorMessage}</h1>}
        {isPending && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
        {blogs && <BlogList blogs={blogs} title="All the Blogs"/> }
      </div>
    </div>
  );
};

export default Home;
