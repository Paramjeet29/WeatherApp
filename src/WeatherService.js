// WeatherService.js
import React, { useEffect, useState } from 'react';

function WeatherService({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '34e7ae8e38msh263b5fb3a9bc712p129676jsn74c3d4817d33',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="weather-service">
      {weatherData ? (
        <>
          <h2>{weatherData.location.city}</h2>
          <p>Temperature: {weatherData.current_observation.condition.temperature}°F</p>
          <p>Condition: {weatherData.current_observation.condition.text}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherService;
