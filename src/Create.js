import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [author,setAuthor] = useState("Ali")
  const [isPending, setIsPending] = useState(false)
  const history = useNavigate();

  const submitBlog = function(e){
    e.preventDefault();

    const blogData = {title,body,author}
    setIsPending(true)

    setTimeout(()=>{
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blogData),
      }).then(()=>{
        setIsPending(false)
        console.log("blog successfully added")
        history('/')
      })
    },1000)
  }

  return ( 
    <div className='create'>
      <h2>Create a Blog</h2>
      <form onSubmit={submitBlog}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e)=> setAuthor(e.target.value) }>
          <option value="mario">Ali</option>
          <option value="yoshi">Mario</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        
      </form>
    </div>
  );
}

export default Create;