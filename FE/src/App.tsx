import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, Box } from '@mui/material';

import { theme } from './consts';
import { Navigation } from './components';

const _theme = createTheme(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={_theme}>
        <Navigation />
        <Box
          minHeight="100vh"
          sx={{
            p: 2,
            backgroundColor: _theme?.bg?.main || 'transparent',
          }}>
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
