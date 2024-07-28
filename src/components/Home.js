import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <h1>Welcome to Weather Web</h1>
        <p>Your one-stop solution for accurate and real-time weather updates.</p>
        <Link to="/search" className="cta-button">Check Weather Now</Link>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>Real-time weather data</li>
          <li>Weather forecasts</li>
          <li>Detailed weather reports</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
