import React, { useState, useEffect } from 'react';

import { authService } from '../../services';
import { userTypes } from '../../types';
import './index.scss';

const Signin = () => {
  const [formData, setFormData] = useState<userTypes.UserCredentials>(
    {
      username: '',
      password: '',
    }
  );

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    await authService.signin(formData);
  };

  return (
    <div className="signin">
      <h1>Log In</h1>

      <form className="signin-form" onSubmit={handleSignin}>
        <input
          type="text"
          name="username"
          className="signin-input"
          placeholder="Username"
          required
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="signin-input"
          onChange={handleInputChange}
        />
        <button type="submit" className="signin-submit-btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Signin;
