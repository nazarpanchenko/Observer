type ReportParams = {
  subject: string;
  telescopeModel: string;
  magnification: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
};

type ReportData = ReportParams & {
  id?: number;
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
  ReportParams,
  ReportData,
  ReportsList,
  ReportsListTuple,
  ModifyReportParams,
  SequelizeUpdateReportResponse,
  ModifiedReportData,
};
