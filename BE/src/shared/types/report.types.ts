import { telescopeEnums } from '../enums';

type ReportData = {
  id?: number;
  telescopeType: telescopeEnums.TelescopeTypes;
  subject: string;
  magnification: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
};

type ReportsList = {
  data: ReportData[];
  count: number;
};

type ReportsListTuple = [ReportData[], number];

type ModifyReportParams = {
  eyepiece: string;
  magnification: string;
  filter: string;
};

type SequelizeUpdateReportResponse = [affectedCount: number, affectedRows: ReportData[]];

type ModifiedReportData = {
  updatedRowsCount: number;
  updatedRecord: ReportData;
};
export {
  ReportData,
  ReportsList,
  ReportsListTuple,
  ModifyReportParams,
  SequelizeUpdateReportResponse,
  ModifiedReportData,
};
