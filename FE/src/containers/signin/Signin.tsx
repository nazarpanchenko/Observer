import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from '@mui/material';

import { Email, Password } from '@mui/icons-material';

import { authService } from '../../services';
import { UserCredentials } from '../../shared/types';

const Signin: React.FC = (): ReactElement => {
  const [formData, setFormData] = useState<UserCredentials>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async (): Promise<void> => {
    await authService.signin(formData);
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4">Enter Your Workspace</Typography>
      </Grid>

      <Grid item xs={6}>
        <form className="signin-form" onSubmit={handleSignin}>
          <FormControl required onChange={handleInputChange}>
            <TextField
              type="email"
              fullWidth
              placeholder="Email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl required onChange={handleInputChange}>
            <TextField
              type="password"
              fullWidth
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Password
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Password />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <FormControl sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          </FormControl>
        </form>

        <Link to="/forgot-password">Forgot password?</Link>
      </Grid>
    </Grid>
  );
};

export default Signin;
