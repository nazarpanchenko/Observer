import React, { ReactElement, useState } from 'react';
import { Grid, Typography, FormControl, InputLabel, Input, Button } from '@mui/material';

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
    <>
      <Grid item xs={12}>
        <Typography variant="h4">Password Recovery</Typography>
      </Grid>

      <Grid item xs={6}>
        <form className="password-recovery-form" onSubmit={handlePasswordRecovery}>
          <FormControl fullWidth sx={{ mb: 2 }} required onChange={handleInputChange}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <Button type="submit">Reset Password</Button>
        </form>
      </Grid>
    </>
  );
};

export default ForgotPassword;
