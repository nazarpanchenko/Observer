import React, { FC, ReactElement, ChangeEvent, useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Button,
  InputAdornment,
  TextField,
} from '@mui/material';

import { Email } from '@mui/icons-material';

import { authService } from '../../services';

const ForgotPassword: FC = (): ReactElement => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordRecovery = async (): Promise<void> => {
    await authService.forgotPassword(email);
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4">Password Recovery</Typography>
      </Grid>

      <Grid item xs={3}>
        <Box component="form" onSubmit={handlePasswordRecovery}>
          <FormControl required onChange={handleInputChange}>
            <TextField
              type="email"
              label="Email"
              placeholder="example@domain.com"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <FormControl sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained">
                Reset
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
