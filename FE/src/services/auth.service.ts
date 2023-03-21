import { accessToken } from '../consts';
import { _axios } from '../utils';
import { UserData, RegisteredUser, UserCredentials } from '../shared/types';

const signup = async (formData: UserData): Promise<void> => {
  try {
    const { id, firstName, lastName, accessToken, refreshToken }: RegisteredUser =
      await _axios.post('/auth/signup', formData);

    localStorage.setItem('userData', JSON.stringify({ id, firstName, lastName }));
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } catch (err) {
    console.log(`signup error: ${err}`);
  }
};

const signin = async (formData: UserCredentials): Promise<void> => {
  try {
    await _axios.post('/auth/signin', formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (err) {
    console.log(`signin error: ${err}`);
  }
};

const logout = async (): Promise<void> => {
  try {
    await _axios.post('/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (err) {
    console.log(`logout error: ${err}`);
  } finally {
    localStorage.removeItem('accessToken');
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
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (err) {
    console.log(`forgotPassword error: ${err}`);
  }
};

export { signup, signin, logout, forgotPassword };
