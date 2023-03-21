import React from 'react';
import { Grid, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Grid container height="100vh" alignItems="center">
      <Typography variant="h4" color='#BB5045'>
        Something Went Wrong.
      </Typography>
    </Grid>
  );
};

export default ErrorPage;
