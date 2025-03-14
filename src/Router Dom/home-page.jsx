import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
    <h1>hello world</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-page">About</Link>
      <Link to="/contact-page">Contact</Link>
    </nav>
    </>
  );
}

export default Homepage;
