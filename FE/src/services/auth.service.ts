import {
  UserData,
  RegisteredUser,
  UserCredentials,
  _axios,
  getAccessToken,
} from '@shared';

const signup = async (formData: UserData): Promise<void> => {
  try {
    const { id, firstName, lastName, accessToken, refreshToken }: RegisteredUser =
      await _axios.post('/auth/signup', formData);

    localStorage.setItem('userData', JSON.stringify({ id, firstName, lastName }));
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } catch (err: any) {
    console.log(`signup error: ${err.message}`);
  }
};

const signin = async (formData: UserCredentials): Promise<void> => {
  try {
    await _axios.post('/auth/signin', formData, {
      headers: {
        Authorization: getAccessToken(),
      },
    });
  } catch (err: any) {
    console.log(`signin error: ${err.message}`);
  }
};

const logout = async (): Promise<void> => {
  try {
    await _axios.post('/auth/logout', null, {
      headers: {
        Authorization: getAccessToken(),
      },
    });
  } catch (err: any) {
    console.log(`logout error: ${err.message}`);
  } finally {
    localStorage.removeItem('userData');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('refreshToken');
  }
};

const forgotPassword = async (email: string): Promise<void> => {
  try {
    await _axios.post(
      '/auth/forgot-password',
      { email },
      {
        headers: {
          Authorization: getAccessToken(),
        },
      }
    );
  } catch (err: any) {
    console.log(`forgotPassword error: ${err.message}`);
  }
};

const tokenRefresh = async (): Promise<void> => {
  try {
    await _axios.get('/auth/token-refresh', {
      headers: {
        Authorization: getAccessToken(),
      },
    });
  } catch (err: any) {
    console.log(`tokenRefresh error: ${err.message}`);
  }
};

export { signup, signin, logout, forgotPassword, tokenRefresh };
