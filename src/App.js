import React, { useState, useEffect } from 'react';
import PropertyCard from './components/PropertyCard';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Header from './components/Header';
import CheckoutForm from './components/CheckoutForm';
import propertiesData from './properties.json';
import './styles/App.css';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({ location: '', price: '', bedrooms: '' });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleAddToCart = (property) => {
    setCart([...cart, property]);
  };

  const handleRemoveFromCart = (property) => {
    setCart(cart.filter(item => item.id !== property.id));
  };

  const filteredProperties = properties.filter(property => {
    const locationFilter = filters.location ? property.location?.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const priceFilter = filters.price ? property.price >= parseInt(filters.price) : true;
    const bedroomsFilter = filters.bedrooms ? property.bedrooms === parseInt(filters.bedrooms) : true;
    return locationFilter && priceFilter && bedroomsFilter;
  });

  return (
    <div className="App-cont">
      <Header/>
      <img className='main-image' alt="main-image" src="https://qph.cf2.quoracdn.net/main-qimg-cc317351f3b44f671b6690b1264106ec"/>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <h1>Explore exclusive spaces</h1>
      <p>Find your perfect property for rent! Whether you're looking for a cozy cabin in the woods, a luxurious villa with a pool, or anythingin between, totality rentals has you. Start your search today!  </p>
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      <CheckoutForm />
    </div>
  );
};

export default App;
