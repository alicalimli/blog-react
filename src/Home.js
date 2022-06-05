import React from "react";
import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const dataFetch = async function(url){
    const response = await fetch(url);
    const results = await response.json();

    return results;
  }

  useEffect(async () =>{
    setBlogs(await dataFetch('http://localhost:8000/blogs'))
  }, [])

  return (
    <div className="home-page">
      <div className="blog-container">
        {}
        {blogs && <BlogList blogs={blogs} title="All the Blogs"/> }
      </div>
    </div>
  );
};

export default Home;
