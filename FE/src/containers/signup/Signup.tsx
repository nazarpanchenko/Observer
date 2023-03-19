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
import './index.scss';

const Signup: React.FC = (): ReactElement => {
  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const theme = useTheme();

  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
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
    setIsAuthorized(true);
  };

  return (
    <Grid container alignItems="center">
      {isAuthorized ? (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Link to="/auth/signin">
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
            <form className="signup-form" onSubmit={handleSignup}>
              <FormControl required onChange={handleInputChange}>
                <TextField
                  name="firstName"
                  placeholder="First Name"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment disableTypography position="end">
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
                      <InputAdornment disableTypography position="end">
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
                      <InputAdornment disableTypography position="end">
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
                      <InputAdornment disableTypography position="end">
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
                      <InputAdornment disableTypography position="end">
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

            <Box color={theme.text.color.error}>{error}</Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Signup;
