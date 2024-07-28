import React, { useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function LocationSearch() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="app">
      <div className="welcome">
        <h1>Welcome to Weather Web</h1>
        <p>Get real-time weather updates for your desired location.</p>
      </div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Search for location"
          type="text"
        />
      </div>
      {data.name && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}, {data.sys?.country}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : <h1>-°C</h1>}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : <p>-</p>}
              {data.main ? <p>Feels like {data.main.feels_like.toFixed()}°C</p> : <p>Feels like -°C</p>}
            </div>
          </div>
          <div className="bottom">
            <div className="wind">
              {data.wind ? <p className="bold">{(data.wind.speed * 3.6).toFixed()} km/h</p> : <p className="bold">-</p>}
              <p>Wind</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : <p className="bold">-</p>}
              <p>Humidity</p>
            </div>
            <div className="visibility">
              {data.visibility ? <p className="bold">{(data.visibility / 1000).toFixed(1)} km</p> : <p className="bold">-</p>}
              <p>Visibility</p>
            </div>
            <div className="pressure">
              {data.main ? <p className="bold">{data.main.pressure} mb</p> : <p className="bold">-</p>}
              <p>Pressure</p>
            </div>
          </div>
        </div>
      )}
     
    </div>
    <Footer/>
    </div>
  );
}

export default LocationSearch;
