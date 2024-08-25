// src/components/PhotoCollage.js
import React from 'react';
import './PhotoCollage.css'; // Ensure you create this CSS file

const PhotoCollage = ({ photos }) => {
  return (
    <div className="photo-collage">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo} alt={`Collage ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoCollage;
