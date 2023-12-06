import { PaginationConfig, ReportsList, _axios } from '@shared';

const getReports = async (
  req: PaginationConfig = { params: {} }
): Promise<ReportsList | undefined> => {
  try {
    const data: ReportsList = await _axios.get('/reports', {
      params: { ...req.params },
    });
    return data;
  } catch (err: any) {
    console.log(`getReports error: ${err.message}`);
  }
};

export { getReports };
