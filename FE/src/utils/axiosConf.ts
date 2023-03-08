import axios from 'axios';

import { BASE_URI } from '../consts';

const _axios = axios.create({
  baseURL: BASE_URI,
  timeout: 5000,
});

export default _axios;
