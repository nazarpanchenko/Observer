import { accessToken } from '../consts';
import { _axios } from '../utils';
import { userTypes } from '../types';

const signup = async (formData: userTypes.UserData) => {
  try {
    const data: userTypes.RegisteredUser = await _axios.post('/auth/signup', formData);
    localStorage.setItem('accessToken', data.accessToken || '');
    localStorage.setItem('refreshToken', data.refreshToken || '');
    
    return data;
  } catch (err) {
    console.log(`signup error: ${err}`);
  }
};

const signin = async (formData: userTypes.UserCredentials) => {
  try {
    const data: userTypes.UserData = await _axios.post('/auth/signin', formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.setItem('accessToken', accessToken || '');
    
    return data;
  } catch (err) {
    console.log(`signin error: ${err}`);
  }
};

const logout = async () => {
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

const forgotPassword = async (email: string) => {
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
