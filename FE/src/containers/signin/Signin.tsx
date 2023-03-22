import React, { FC, ReactElement, ChangeEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from '@mui/material';

import { Email, SecurityOutlined } from '@mui/icons-material';

import { authService } from '../../services';
import { UserCredentials } from '../../shared/types';

const Signin: FC = (): ReactElement => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserCredentials>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async (): Promise<void> => {
    await authService.signin(formData);
    navigate('/sessions', { replace: true });
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4">Enter Your Credentials</Typography>
      </Grid>

      <Grid item xs={3}>
        <Box component="form" onSubmit={handleSignin}>
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
          <FormControl required onChange={handleInputChange}>
            <TextField
              type="password"
              label="Password"
              placeholder="**********"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SecurityOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained">
                Sign In
              </Button>
            </Box>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/forgot-password">Forgot password?</Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signin;
