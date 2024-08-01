import React from 'react';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cart.length === 0 ? (
      <p>No items in the cart</p>
    ) : (
      cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))
    )}
    <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
  </div>
);

export default Cart;