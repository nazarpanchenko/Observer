import React from 'react';
import { Grid, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Grid container height="100vh" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
