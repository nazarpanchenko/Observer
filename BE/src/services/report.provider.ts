import db from '../db';
import * as types from '../types/report.types';

class ReportProvider {
  async getReports(): Promise<types.ReportsList> {
    const [data, count] = await db.Report.getReports();
    return {
      data,
      count,
    };
  }

  async getOne(id: number): Promise<types.ReportModel | null> {
    const report = await db.Report.getOne(id);
    return report;
  }

  async create(
    reportData: types.ReportData
  ): Promise<types.ReportModel> {
    const newReport = await db.Report.save(reportData);
    return newReport;
  }

  async update(
    id: number,
    data: types.ModifyReportData
  ): Promise<void> {
    await db.Report.modify(id, data);
  }

  async delete(id: number): Promise<void> {
    await db.Report.delete(id);
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
