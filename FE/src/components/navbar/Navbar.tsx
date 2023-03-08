import React from 'react';
import { Link } from 'react-router-dom';

import { authService } from '../../services';
import './index.scss';

const Navbar = () => {
  const handleLogout = async () => {
    await authService.logout();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-link">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="navbar-link">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="navbar-link">
          <Link to="/reports">Reports</Link>
        </li>
        <li className="navbar-link">
          <Link to="/sessions">Sessions</Link>
        </li>
        <li className="navbar-link">
          <Link to="/equipment">Equipment</Link>
        </li>
      </ul>
      <div id="logout-btn" onClick={handleLogout}>
        Logout
      </div>
    </nav>
  );
};

export default Navbar;
