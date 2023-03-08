import { axios } from '../utils';
import { BASE_URI } from '../consts';
import { userTypes } from '../types';

const _axios = axios.default;

const signup = async (formData: userTypes.UserData) => {
  const data = await _axios.post(`${BASE_URI}/signup`, formData, {
    headers: {
      Authorization: `Bearer `,
    },
  });
  return data;
};

const signin = async (formData: userTypes.UserCredentials) => {
  const data = await _axios.post(`${BASE_URI}/signin`, formData, {
    headers: {
      Authorization: `Bearer `,
    },
  });
  return data;
};

const logout = async () => {
  await _axios.post(`${BASE_URI}/logout`, {
    headers: {
      Authorization: `Bearer `,
    },
  });
};

export { signup, signin, logout };
