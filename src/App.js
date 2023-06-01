// App.js
import React, { useState } from 'react';
import WeatherService from './WeatherService';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [showWeather, setShowWeather] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleShowWeather = () => {
    setShowWeather(true);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={handleShowWeather}>Get Weather</button>
      </div>
      {showWeather && <WeatherService city={city} />}
    </div>
  );
}

export default App;
