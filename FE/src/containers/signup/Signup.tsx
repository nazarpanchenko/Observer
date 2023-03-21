import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  FormControl,
  Button,
  Box,
  useTheme,
  InputAdornment,
  TextField,
} from '@mui/material';

import { Email, Password, Person } from '@mui/icons-material';

import { authService } from '../../services';
import { UserData } from '../../shared/types';
import { Loader } from '../../components';
import './index.scss';

const Signup: React.FC = (): ReactElement => {
  const theme = useTheme();

  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const [passwordsMismatch, setPasswordsMismatch] = useState<string>('');
  const [userCreated, setUserCreated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPasswordsMismatch('');

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
      setPasswordsMismatch('Passwords does not match');
      return;
    }

    setLoading(true);
    await authService.signup(formData);
    setLoading(false);
    setUserCreated(true);
  };

  if (loading) return <Loader />;

  return (
    <Grid container alignItems="center">
      {userCreated && (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Link to="/auth/signin">
              Email with verification link has been sent to your email. Please, complete
              the registration process by clicking on that link.
            </Link>
          </Typography>
        </Grid>
      )}

      <>
        <Grid item xs={12}>
          <Typography variant="h4">Registration</Typography>
        </Grid>

        <Grid item xs={3}>
          <form className="signup-form" onSubmit={handleSignup}>
            <FormControl required onChange={handleInputChange}>
              <TextField
                name="firstName"
                placeholder="First Name"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl required onChange={handleInputChange}>
              <TextField
                name="lastName"
                placeholder="Last Name"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl required onChange={handleInputChange}>
              <TextField
                type="email"
                name="email"
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
                name="password"
                fullWidth
                placeholder="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl required onChange={handleInputChange}>
              <TextField
                name="repeatedPassword"
                type="password"
                fullWidth
                placeholder="Repeat Password"
                InputProps={{
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
                Sign Up
              </Button>
            </FormControl>
          </form>

          <Box color={theme.text.color.error}>{passwordsMismatch}</Box>
        </Grid>
      </>
    </Grid>
  );
};

export default Signup;
