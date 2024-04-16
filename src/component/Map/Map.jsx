import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    // Initialize the map when the component mounts
    const leafletMap = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);
    setMap(leafletMap);

    // Show the user's location when the component mounts
    showMyLocation();

    // Clean up on component unmount
    return () => {
      if (leafletMap) {
        leafletMap.remove();
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once

  const showMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          if (map) {
            if (marker) {
              map.removeLayer(marker);
            }
            
            const newMarker = L.marker([latitude, longitude]).addTo(map);
            setMarker(newMarker);
            map.setView([latitude, longitude], 13);
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div>
      <button onClick={showMyLocation}>Show My Location</button>
      <div id="map" style={{ height: '300px', width: '100%' }}></div>
    </div>
  );
};

export default Map;
