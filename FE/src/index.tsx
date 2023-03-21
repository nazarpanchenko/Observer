import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { lazyLoadRoute } from './utils';
import * as services from './services';

import App from './App';
import { ErrorPage } from './components';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: lazyLoadRoute('Signup'),
      },
      {
        path: '/signin',
        element: lazyLoadRoute('Signin'),
      },
      {
        path: '/forgot-password',
        element: lazyLoadRoute('ForgotPassword'),
      },
      {
        path: '/reports',
        element: lazyLoadRoute('Reports'),
        loader: services.reportService.getReports,
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

const rootNode = document.getElementById('root') as HTMLElement;
createRoot(rootNode).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
