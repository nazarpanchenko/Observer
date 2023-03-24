import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';

import { theme } from './consts';
import { lazyLoadRoute, ErrorBoundary } from './utils';
import { reportService } from './services';
import { Navigation, ErrorPage, Auth } from './components';

const _theme = createTheme(theme);

const router = createBrowserRouter([
  {
    path: '/',
    element: lazyLoadRoute('Signin'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: lazyLoadRoute('Signup'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/forgot-password',
    element: lazyLoadRoute('ForgotPassword'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/sessions',
    element: <Auth>{lazyLoadRoute('Sessions')}</Auth>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/reports',
    element: <Auth>{lazyLoadRoute('Reports')}</Auth>,
    loader: reportService.getReports,
    errorElement: <ErrorPage />,
  },
  {
    path: '/equipment',
    element: <Auth>{lazyLoadRoute('Equipment')}</Auth>,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={_theme}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <>
          <Navigation />
          <Box
            minHeight="95vh"
            padding="2.5vh"
            sx={{
              backgroundColor: _theme?.bg?.main || 'transparent',
            }}>
            <RouterProvider router={router} />
          </Box>
        </>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
