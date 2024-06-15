import React from 'react';
import './PropertyDetails.css';

function PropertyDetails() {
  return (
    <div className="property-container">
    <div className="property-images">
    {/* <div className="property-images2"> */}
      <div className="property-main-image">
        {/* Add the main image */}
        <img src="images/emitence-mainImage1.png" alt="Main" />
      </div>
      <div className="property-side-images">
        {/* Add the side images */}
        <img src="images/emitence-mainImage1.png" alt="Side 1" />
        <img src="images/emitence-mainImage1.png" alt="Side 2" />
      </div>
      {/* </div> */}
    </div>
    </div>  
  );
}

export default PropertyDetails;