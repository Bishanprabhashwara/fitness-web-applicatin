import React from 'react';
import './Weather.css';

const Weather = ({ weatherData }) => {
  return (
    <div>
      
      {weatherData && (
        <div>
            <div className='weatherinfo'>
            <h2 className='h2'>Weather Information</h2>
          <p>{weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          </div>
          {/* <img src="./images/Untitled-removebg-preview.png" width="50%" height="75%" className='weatherimg'/> */}
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Weather;