import { _axios } from '../utils';
import { reportTypes } from '../types';

const getReports = async (
  query: reportTypes.ReportPaginationConfig = { params: {} }
): Promise<reportTypes.ReportsList | undefined> => {
  try {
    const data: reportTypes.ReportsList = await _axios.get('/reports', {
      params: { ...query.params },
    });
    return data;
  } catch (err) {
    console.log(`getReports error: ${err}`);
  }
};

export { getReports };
