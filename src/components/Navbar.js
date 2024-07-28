import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar">
    <h1>Weather Web</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search Your Location?</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
    </div>
  )
}

export default Navbar