// // PropertyCard.js
// import React from 'react';
// import PropTypes from 'prop-types';
// // import './PropertyCard.css'; // Optional: for styling the component
// import './feature-card.css';

// const PropertyCard = ({ image, projectName, price, type, location }) => {
//   return (
//     <div className="property-card">
//       <img src={image} alt={projectName} className="property-card-image" />
//       <div className="property-card-details">
//         <h2 className="property-card-title">{projectName}</h2>
//         <p className="property-card-price">{price}</p>
//         <p className="property-card-type">{type}</p>
//         <p className="property-card-location">{location}</p>
//       </div>
//     </div>
//   );
// };

// PropertyCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   projectName: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
// };

// export default PropertyCard;

import React from 'react';
import { FaBed, FaBath, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import './PropertyCard.css';

const PropertyCard = () => {
  const property = {
    imageUrl: 'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fres.klook.com%2Fimages%2Ffl_lossy.progressive%2Cq_65%2Fc_fill%2Cw_1200%2Ch_630%2Fw_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3%2Factivities%2Ftsah7c9evnal289z5fig%2FIMG%2520Worlds%2520of%2520Adventure%2520Admission%2520Ticket%2520in%2520Dubai%2520-%2520Klook.jpg&imgrefurl=https%3A%2F%2Fwww.klook.com%2Fen-IN%2Factivity%2F2907-img-worlds-of-adventure-dubai%2F&docid=p_NeTio1_AougM&tbnid=fou8CTmBLy7VLM&vet=12ahUKEwjM4bWD9tyGAxVRsVYBHbrGDs0QM3oECBkQAA..i&w=1200&h=630&hcb=2&ved=2ahUKEwjM4bWD9tyGAxVRsVYBHbrGDs0QM3oECBkQAA',
    address: '2861 62nd Ave, Oakland, CA 94605',
    city: 'Oakland',
    state: 'CA',
    price: 649900,
    bedrooms: 3,
    bathrooms: 1.5,
    squareFeet: 1032,
    type: 'Family',
  };

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.imageUrl} alt={property.address} />
        <div className="property-price">${property.price.toLocaleString()}</div>
      </div>
      <div className="property-details">
        <h3>{property.address}</h3>
        <div className="property-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>{property.city}, {property.state}</span>
        </div>
        <div className="property-features">
          <div className="feature">
            <FaBed className="feature-icon" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="feature">
            <FaBath className="feature-icon" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="feature">
            <FaHome className="feature-icon" />
            <span>{property.squareFeet} sqft</span>
          </div>
        </div>
        <div className="property-type">{property.type}</div>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;