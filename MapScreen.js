import React, { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

const MapScreen = () => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    const initializedMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.9814, 40.7488], // Example center coordinates (New York City)
      zoom: 12 // Initial zoom level
    });

    initializedMap.on('click', 'markers', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      setSelectedMarker({ coordinates, description });
    });

    initializedMap.on('mouseenter', 'markers', () => {
      initializedMap.getCanvas().style.cursor = 'pointer';
    });

    initializedMap.on('mouseleave', 'markers', () => {
      initializedMap.getCanvas().style.cursor = '';
    });

    setMap(initializedMap);

    return () => {
      initializedMap.remove(); // Cleanup map on component unmount
    };
  }, []);

  return (
    <div>
      <h2>Map Screen</h2>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      {selectedMarker && (
        <Link to={`/details/${selectedMarker.coordinates}`}>
          <p>{selectedMarker.description}</p>
        </Link>
      )}
    </div>
  );
};

export default MapScreen;