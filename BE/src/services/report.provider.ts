import db from '../db';
import {
  PaginationConfig,
  ReportData,
  ReportsList,
  ModifiedReportData,
} from '../shared/types';

class ReportProvider {
  async getReports(query: PaginationConfig | object): Promise<ReportsList> {
    const list: ReportsList = await db.Report.getReports(query);
    return list;
  }

  async getOne(id: number): Promise<ReportData> {
    const data: ReportData = await db.Report.getOne(id);
    return data;
  }

  async create(reportData: ReportData): Promise<ReportData> {
    const createdRecord: ReportData = await db.Report.save(reportData);
    return createdRecord;
  }

  async update(id: number, data: ModifiedReportData): Promise<ReportData> {
    const updatedRecord: ReportData = await db.Report.modify(id, data);
    return updatedRecord;
  }

  async delete(id: number): Promise<ReportData> {
    const deletedRecord: ReportData = await db.Report.delete(id);
    return deletedRecord;
  }
}

const reportProvider = new ReportProvider();
export default reportProvider;
