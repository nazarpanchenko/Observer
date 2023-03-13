import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@mui/material';

import { authService } from '../../services';
import { userTypes } from '../../types';
import './index.scss';

const Signin: React.FC = (): ReactElement => {
  const [formData, setFormData] = useState<userTypes.UserCredentials>({
    username: '',
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
    <Grid container flexDirection="column" justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Enter Your Workspace
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <form className="signin-form" onSubmit={handleSignin}>
          <FormControl fullWidth sx={{ mb: 2 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" type="password" />
          </FormControl>

          <Button type="submit" variant="contained" sx={{ mb: 2 }}>
            Sign In
          </Button>
        </form>

        <Link to="/forgot-password">Forgot password?</Link>
      </Grid>
    </Grid>
  );
};

export default Signin;
