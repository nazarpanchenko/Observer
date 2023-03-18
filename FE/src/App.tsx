import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Grid, ThemeProvider, ThemeOptions } from '@mui/material';

import { theme } from './consts';
import { Navigation } from './components';

// const _theme: ThemeOptions = createTheme(theme);
const _theme: ThemeOptions = createTheme(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={_theme}>
        <Navigation />
        <Grid
          container
          sx={{ p: 4 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <Outlet />
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
