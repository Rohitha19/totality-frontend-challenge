import React from 'react';
import './Filter.css';
import { FaFilter } from "react-icons/fa";

const Filter = ({ filters, onFilterChange }) => {
  const handleInputChange = (name, value) => {
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <div className='filter-groups'>
      <FaFilter className='filter-icon'/>
      <h3>Filter</h3>
      <div className="filter-group">
        
        <input
        placeholder="Location"
          type="text"
          value={filters.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
      </div>
      <div className="filter-group">
        
        <input
        placeholder="Price"
          type="number"
          value={filters.price || ''}
          onChange={(e) => handleInputChange('price', e.target.value)}
        />
      </div>
      <div className="filter-group">
        
        <input
        placeholder="Bedrooms"
          type="number"
          value={filters.bedrooms || ''}
          onChange={(e) => handleInputChange('bedrooms', e.target.value)}
        />
      </div>
      </div>
      
    </div>
  );
};

export default Filter;