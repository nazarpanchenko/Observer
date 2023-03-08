import React from 'react';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import { lazyLoadRoute } from './utils';
import { AppLayout } from './components';

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <h1>Something Went Wrong</h1>,
      children: [
        {
          path: '/signup',
          element: lazyLoadRoute('Signup'),
        },
        {
          path: '/signin',
          element: lazyLoadRoute('Signin'),
        },
        {
          path: '/reports',
          element: lazyLoadRoute('Reports'),
        },
        {
          path: '/sessions',
          element: lazyLoadRoute('Sessions'),
        },
        {
          path: '/equipment',
          element: lazyLoadRoute('Equipment'),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
