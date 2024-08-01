import React from 'react';
import PropertyItem from './PropertyItem';
import Grid from '@mui/material/Grid';

const PropertyList = ({ properties, addToCart, filters }) => {
  console.log('Filtered Properties:', properties);

  const filteredProperties = properties.filter((property) => {
    return (
      (!filters.location || property.location.includes(filters.location)) &&
      (!filters.priceRange || 
        (filters.priceRange === 'low' && property.price < 100) ||
        (filters.priceRange === 'medium' && property.price >= 100 && property.price <= 200) ||
        (filters.priceRange === 'high' && property.price > 200)) &&
      (!filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms))
    );
  });

  return (
    <Grid container spacing={2}>
      {filteredProperties.length ? (
        filteredProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <PropertyItem property={property} addToCart={addToCart} />
          </Grid>
        ))
      ) : (
        <p>No properties match your criteria.</p>
      )}
    </Grid>
  );
};

export default PropertyList;
