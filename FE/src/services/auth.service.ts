import { accessToken } from '../consts';
import { _axios } from '../utils';
import { userTypes } from '../types';

const signup = async (formData: userTypes.UserData): Promise<void> => {
  try {
    const { accessToken, refreshToken }: userTypes.RegisteredUser = await _axios.post(
      '/auth/signup',
      formData
    );
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } catch (err) {
    console.log(`signup error: ${err}`);
  }
};

const signin = async (formData: userTypes.UserCredentials): Promise<void> => {
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
