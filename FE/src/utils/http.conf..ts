import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { BASE_URI } from '../consts';

const _axios: AxiosInstance = axios.create({
  baseURL: BASE_URI,
  timeout: 5000,
});

_axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { _axios };
