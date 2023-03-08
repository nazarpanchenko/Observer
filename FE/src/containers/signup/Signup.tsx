import React, { useState, useEffect } from 'react';

import { authService } from '../../services';
import { userTypes } from '../../types';
import './index.scss';

const Signup = () => {
  const [formData, setFormData] = useState<userTypes.UserData>({
    username: '',
    password: '',
    email: '',
    country: '',
    postalCode: 0,
    streetAddress: '',
    phoneNumber: '',
  });
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === 'repeatedPassword') {
      setRepeatedPassword(value);
    }

    if (formData.password !== repeatedPassword) {
      setError('Passwords does not match');
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    await authService.signup(formData);
  };

  return (
    <div className="signup">
      <h1>Registration</h1>

      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          className="signup-input"
          placeholder="Username"
          required
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="signup-input"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="Password"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="Repeat Password"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="repeatedPassword"
          className="signup-input"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          className="signup-input"
          placeholder="Country"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="postalCode"
          className="signup-input"
          placeholder="Street Address"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="streetAddress"
          className="signup-input"
          placeholder="Phone Number"
          onChange={handleInputChange}
        />
        <button type="submit" className="signup-submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
