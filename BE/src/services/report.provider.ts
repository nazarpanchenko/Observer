import { Report } from '../db/models';
import * as reportTypes from '../types/report.types';

class ReportProvider {
  async getReports(): Promise<reportTypes.ReportsList> {
    const [data, count] = await Promise.all([Report.findAll(), Report.count()]);
    return {
      data,
      count,
    };
  }

  async getOne(reportId: number): Promise<reportTypes.ReportModel | null> {
    const report = await Report.findOne({ where: { id: reportId } });
    return report;
  }

  async create(
    reportData: reportTypes.ReportData
  ): Promise<reportTypes.ReportModel> {
    const newReport = await Report.create(reportData);
    return newReport;
  }

  async update(
    reportId: number,
    updateData: reportTypes.ReportModel
  ): Promise<void> {
    await Report.update(
      { ...updateData },
      {
        where: { id: reportId },
      }
    );
  }

  async delete(reportId: number): Promise<void> {
    await Report.destroy({ where: { id: reportId } });
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
