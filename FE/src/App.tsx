import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, Box } from '@mui/material';

import { theme } from './consts';
import { ErrorBoundary } from './utils';
import { Navigation, ErrorPage } from './components';

const _theme = createTheme(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={_theme}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <>
            <Navigation />
            <Box
              minHeight="100vh"
              sx={{
                backgroundColor: _theme?.bg?.main || 'transparent',
              }}>
              <Outlet />
            </Box>
          </>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default App;
