import React from 'react';
import { Grid, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Grid container height="100vh" justifyContent="center" alignItems="center">
      <Typography variant="h4" color="#FF0000">Something Went Wrong.</Typography>
    </Grid>
  );
};

export default ErrorPage;
