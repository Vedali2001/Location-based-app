import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsScreen = () => {
  const { coordinates } = useParams();

  return (
    <div>
      <h2>Details Screen</h2>
      <p>Coordinates: {coordinates}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailsScreen;
