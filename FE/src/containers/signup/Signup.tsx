import React, { FormEventHandler, ReactElement, useState } from 'react';
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  Box,
} from '@mui/material';

import { authService } from '../../services';
import { userTypes } from '../../types';
import './index.scss';

const Signup: React.FC = (): ReactElement => {
  const [formData, setFormData] = useState<userTypes.UserData>({
    username: '',
    email: '',
    password: '',
  });
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setError('');

    if (name === 'repeatedPassword') {
      setRepeatedPassword(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.password !== repeatedPassword) {
      setError('Passwords does not match');
      return;
    }
    await authService.signup(formData);
  };

  return (
    <Grid container flexDirection="column" justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Registration
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <form className="signup-form" onSubmit={handleSignup}>
          <FormControl fullWidth sx={{ mb: 2 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" name="username" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" name="email" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" name="password" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="repeatedPassword">Repeat Password</InputLabel>
            <Input id="repeatedPassword" type="password" name="repeatedPassword" />
          </FormControl>

          <Button type="submit" variant="contained" sx={{ mb: 2 }}>
            Sign Up
          </Button>
        </form>

        <Box color="#ad1414">{error}</Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
