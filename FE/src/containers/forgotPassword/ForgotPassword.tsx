import React, { ReactElement, useState } from 'react';
import {
  Grid,
  Typography,
  FormControl,
  Button,
  InputAdornment,
  TextField,
} from '@mui/material';

import { Email } from '@mui/icons-material';

import { authService } from '../../services';
import './index.scss';

const ForgotPassword: React.FC = (): ReactElement => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

      <Grid item xs={6}>
        <form className="password-recovery-form" onSubmit={handlePasswordRecovery}>
          <FormControl required onChange={handleInputChange}>
            <TextField
              type="email"
              placeholder="Email"
              InputProps={{
                endAdornment: (
                  <InputAdornment disableTypography position="end">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <FormControl sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained">
              Reset Password
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
