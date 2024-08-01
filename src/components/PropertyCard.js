import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import './PropertyCard.css';

const PropertyCard = ({ property, onAddToCart }) => (
  <div className="property-card">
    <div className='property-image'>
    <img src={property.image} alt={property.title} /> </div>
    <h3>{property.title}</h3>
    <p className='description'>{property.description}</p>
    <p className='details'>${property.price}</p>
    <div className='location details'>
      <IoLocationSharp/>
      <p>{property.location}</p>
    </div>
    <p className='details'>{property.bedrooms}bhk</p>
    <button onClick={() => onAddToCart(property)}>Book Now</button>
  </div>
);

export default PropertyCard;