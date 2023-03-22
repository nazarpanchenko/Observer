import React, { FC, ReactElement, ChangeEvent, FormEvent, useState } from 'react';
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

import {
  Email,
  SecurityTwoTone,
  SecurityOutlined,
  Person,
  Person2Outlined,
} from '@mui/icons-material';

import { authService } from '../../services';
import { UserData } from '../../shared/types';
import { Loader } from '../../components';
import './index.scss';

const Signup: FC = (): ReactElement => {
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

  const handleSignup = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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
      {userCreated ? (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Link to="/signin">
              Email with verification link has been sent to your email. Please, complete
              the registration process by clicking on that link.
            </Link>
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography variant="h4">Registration</Typography>
          </Grid>

          <Grid item xs={3}>
            <Box component="form" onSubmit={handleSignup}>
              <FormControl required onChange={handleInputChange}>
                <TextField
                  name="firstName"
                  label="First Name"
                  placeholder="__________"
                  fullWidth
                  InputProps={{
                    startAdornment: (
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
                  label="Last Name"
                  placeholder="__________"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2Outlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl required onChange={handleInputChange}>
                <TextField
                  type="email"
                  name="email"
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
                  name="password"
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
              <FormControl required onChange={handleInputChange}>
                <TextField
                  name="repeatedPassword"
                  type="password"
                  label="Repeat Password"
                  placeholder="**********"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SecurityTwoTone />
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
            </Box>

            <Box color={theme.text.color.error}>{passwordsMismatch}</Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Signup;
