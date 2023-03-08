import { axios } from '../utils';
import { BASE_URI } from '../consts';

import { reportTypes } from '../types';
import { AxiosResponse } from 'axios';

const _axios = axios.default;

const getReports = async () => {
  const res: AxiosResponse<any, any> = await _axios.get(
    `${BASE_URI}/reports`
  );
  const data: reportTypes.ReportsList = res.data;
  return data;
};

export { getReports };
