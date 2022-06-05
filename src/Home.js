import React from "react";
import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true)

  const dataFetch = async function(url){
    const response = await fetch(url);
    const results = await response.json();

    return results;
  }

  useEffect(async () =>{
    const blogDatas = await dataFetch('http://localhost:8000/blogs')

    setBlogs(await blogDatas);

    blogDatas.then(setIsPending(false))

  }, [])

  return (
    <div className="home-page">
      <div className="blog-container">
        {isPending && <h1 style={{
          textAlign: 'center',
        }}>Loading...</h1>}
        {blogs && <BlogList blogs={blogs} title="All the Blogs"/> }
      </div>
    </div>
  );
};

export default Home;
