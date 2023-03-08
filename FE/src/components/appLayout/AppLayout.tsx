import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Navbar } from '../index';
import '../../index.scss';

const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/reports');
  }, []);

  return (
    <>
      <Navbar />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
