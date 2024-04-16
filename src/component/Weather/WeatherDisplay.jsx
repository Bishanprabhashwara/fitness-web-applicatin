// src/components/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = 'ee4a0cd6c9a2b9bcea5123b9ddf1b75e';

  useEffect(() => {
    const getWeatherData = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getWeatherData(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            setLoading(false);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
        setLoading(false);
      }
    };

    getLocation();
  }, [apiKey]);

  return (
    <div className='weatherdisplay'>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Weather weatherData={weatherData} />
      )}
    </div>
  );
};

export default WeatherDisplay;
