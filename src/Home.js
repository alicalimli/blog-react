import React from "react";
import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dataFetch = async function(url){
    try{
      const response = await fetch(url);

      if(!response.ok) throw new Error("Can't fetch resources.");

      const results = await response.json();
  
      return results;
    }
    catch(error){
      throw error;
    }
  }

  useEffect(async () =>{
    try{
      setErrorMessage(null)
      
      const blogDatas = await dataFetch('http://localhost:8000/blogs');

      setBlogs(await blogDatas);

      blogDatas.then(setIsPending(false));
    }
    catch(error){
      console.log(error)
      setErrorMessage(error.message);
      setIsPending(false)
    }
  }, [])

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
