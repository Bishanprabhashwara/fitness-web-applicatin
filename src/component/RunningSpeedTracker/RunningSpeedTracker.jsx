import React, { useState, useEffect, useRef } from 'react';
import './RunningSpeedTracker.css';

function RunningSpeedTracker() {
  const [speed, setSpeed] = useState(0);
  const positionsRef = useRef([]); // Define positionsRef

  useEffect(() => {
    let watchId;

    const calculateSpeed = (positions) => {
      const { latitude, longitude, timestamp } = positions[positions.length - 1];
      const { latitude: prevLat, longitude: prevLon, timestamp: prevTimestamp } = positions[positions.length - 2];

      // Calculate distance using Haversine formula
      const distance = haversine(prevLat, prevLon, latitude, longitude);

      // Calculate time difference in seconds
      const timeDifference = (timestamp - prevTimestamp) / 1000;

      // Calculate speed in meters per second
      const currentSpeed = distance / timeDifference;

      // Update the speed in the state
      setSpeed(currentSpeed);
    };

    const successCallback = (position) => {
      const { coords, timestamp } = position;
      const { latitude, longitude } = coords;

      // Initialize positions array or push the current position
      if (!positionsRef.current.length) {
        positionsRef.current.push({ latitude, longitude, timestamp });
      } else {
        positionsRef.current.push({ latitude, longitude, timestamp });
        calculateSpeed(positionsRef.current);
      }
    };

    const errorCallback = (error) => {
      console.error('Error getting location:', error.message);
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 5000,
    };

    // Start watching the user's position
    watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

    // Cleanup: Stop watching the position when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };

    
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div className='displaySpeed'>
        <p>Your Speed: {speed.toFixed(2)} m/s</p>
      </div>
      
    </>

  );
}

// Haversine formula to calculate distance between two points on the Earth
const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km

  return distance * 1000; // Convert to meters
};

// Helper function to convert degrees to radians
const toRad = (value) => {
  return value * Math.PI / 180;
};

export default RunningSpeedTracker;
