import db from '../db';
import { reportTypes } from '../types';

class ReportProvider {
  async getReports(): Promise<reportTypes.ReportsList> {
    const [data, count] = await db.Report.getReports();
    return {
      data,
      count,
    };
  }

  async getOne(id: number): Promise<reportTypes.ReportModel | null> {
    const report = await db.Report.getOne(id);
    return report;
  }

  async create(
    reportData: reportTypes.ReportData
  ): Promise<reportTypes.ReportModel> {
    const newReport = await db.Report.save(reportData);
    return newReport;
  }

  async update(
    id: number,
    data: reportTypes.ModifyReportData
  ): Promise<void> {
    await db.Report.modify(id, data);
  }

  async delete(id: number): Promise<void> {
    await db.Report.delete(id);
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
