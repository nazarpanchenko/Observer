import { Report } from '../db/models';
import * as reportTypes from '../types/report.types';

class ReportProvider {
  async getReports(): Promise<reportTypes.ReportsList> {
    const [data, count] = await Report.getReports();
    return {
      data,
      count,
    };
  }

  async getOne(id: number): Promise<reportTypes.ReportModel | null> {
    const report = await Report.getOne(id);
    return report;
  }

  async create(
    reportData: reportTypes.ReportData
  ): Promise<reportTypes.ReportModel> {
    const newReport = await Report.save(reportData);
    return newReport;
  }

  async update(id: number, data: reportTypes.ModifyReportData): Promise<void> {
    await Report.modify(id, data);
  }

  async delete(id: number): Promise<void> {
    await Report.delete(id);
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
