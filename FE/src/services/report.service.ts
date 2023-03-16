import { _axios } from '../utils';
import { globalTypes, reportTypes } from '../types';

const getReports = async (
  req: globalTypes.PaginationConfig = { params: {} }
): Promise<reportTypes.ReportsList | undefined> => {
  try {
    const data: reportTypes.ReportsList = await _axios.get('/reports', {
      params: { ...req.params },
    });
    return data;
  } catch (err) {
    console.log(`getReports error: ${err}`);
  }
};

export { getReports };
