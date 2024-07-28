import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Navbar/>
    <div className="about">
      <h1>About Weather Web</h1>
      <p>Weather Web provides accurate and up-to-date weather information to help you plan your day better.</p>
      <p>Our Web App offers real-time weather data, forecasts, and detailed reports, ensuring you're always prepared.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
