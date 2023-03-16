import db from '../db';
import { globalTypes, reportTypes } from '../shared/types';

class ReportProvider {
  async getReports(
    query: globalTypes.PaginationConfig | {}
  ): Promise<reportTypes.ReportsList> {
    const list: reportTypes.ReportsList = await db.Report.getReports(query);
    return list;
  }

  async getOne(id: number): Promise<reportTypes.ReportModel> {
    const data: reportTypes.ReportModel = await db.Report.getOne(id);
    return data;
  }

  async create(reportData: reportTypes.ReportData): Promise<reportTypes.ReportModel> {
    const createdRecord: reportTypes.ReportModel = await db.Report.save(reportData);
    return createdRecord;
  }

  async update(
    id: number,
    data: reportTypes.ModifyReportData
  ): Promise<reportTypes.ReportModel> {
    const updatedRecord: reportTypes.ReportModel = await db.Report.modify(id, data);
    return updatedRecord;
  }

  async delete(id: number): Promise<reportTypes.ReportModel> {
    const deletedRecord: reportTypes.ReportModel = await db.Report.delete(id);
    return deletedRecord;
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
