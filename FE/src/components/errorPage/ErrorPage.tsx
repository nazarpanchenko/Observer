import React from 'react';
import { useTheme, Grid, Typography } from '@mui/material';

const ErrorPage = () => {
  const theme = useTheme();

  return (
    <Grid container height="100vh" alignItems="center">
      <Typography variant="h4" color={theme.text.color.error}>
        Something Went Wrong. Please, try to refresh the page or visit it later
      </Typography>
    </Grid>
  );
};

export default ErrorPage;
