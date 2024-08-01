import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
    setSubmitted(true);
  };

  return (
    <div className="checkout-form">
      {submitted ? (
        <div className="confirmation">
          <h2>Thank you for your booking!</h2>
          <p>Your booking details have been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Checkout</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;