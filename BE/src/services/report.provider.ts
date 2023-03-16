import db from '../db';
import { globalTypes, reportTypes } from '../shared/types';

class ReportProvider {
  async getReports(
    query: globalTypes.PaginationConfig | object
  ): Promise<reportTypes.ReportsList> {
    const list: reportTypes.ReportsList = await db.Report.getReports(query);
    return list;
  }

  async getOne(id: number): Promise<reportTypes.ReportData> {
    const data: reportTypes.ReportData = await db.Report.getOne(id);
    return data;
  }

  async create(reportData: reportTypes.ReportData): Promise<reportTypes.ReportData> {
    const createdRecord: reportTypes.ReportData = await db.Report.save(reportData);
    return createdRecord;
  }

  async update(
    id: number,
    data: reportTypes.ModifiedReportData
  ): Promise<reportTypes.ReportData> {
    const updatedRecord: reportTypes.ReportData = await db.Report.modify(id, data);
    return updatedRecord;
  }

  async delete(id: number): Promise<reportTypes.ReportData> {
    const deletedRecord: reportTypes.ReportData = await db.Report.delete(id);
    return deletedRecord;
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
