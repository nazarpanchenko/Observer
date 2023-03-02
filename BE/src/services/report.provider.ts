import Report from '../db/models/Report';
import {
  FetchedReports,
  GetReport,
  CreateReport,
  ReportModel,
} from '../types/report.types';

class ReportProvider {
  async getReports(): Promise<FetchedReports> {
    const [data, count] = await Promise.all([Report.findAll(), Report.count()]);
    return {
      data,
      count,
    };
  }

  async getOne(reportId: number): Promise<GetReport> {
    const report = await Report.findOne({ where: { id: reportId } });
    return report;
  }

  async create(reportData: ReportModel): Promise<CreateReport> {
    const newReport = await Report.create(reportData);
    return newReport;
  }

  async update(reportId: number, updateData: ReportModel): Promise<void> {
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
