import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return ( 
    <div className="error-container">
      <h1>Oops, Page not found...</h1>
      <Link to="/">Click here to redirect in the home page</Link>
    </div>
  );
}

export default Error404;