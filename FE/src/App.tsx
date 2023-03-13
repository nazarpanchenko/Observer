import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Box, ThemeProvider } from '@mui/material';

import { theme } from './consts';
import { Navigation } from './components';

// const _theme = createTheme(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      {/* <ThemeProvider theme={_theme}> */}
        <Navigation />
        <Box sx={{ p: 4 }}>
          <Outlet />
        </Box>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
