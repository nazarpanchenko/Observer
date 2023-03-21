import { _axios } from '../utils';
import { PaginationConfig, ReportsList } from '../shared/types';

const getReports = async (
  req: PaginationConfig = { params: {} }
): Promise<ReportsList | undefined> => {
  try {
    const data: ReportsList = await _axios.get('/reports', {
      params: { ...req.params },
    });
    return data;
  } catch (err) {
    console.log(`getReports error: ${err}`);
  }
};

export { getReports };
