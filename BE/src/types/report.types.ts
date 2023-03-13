import { Model } from 'sequelize';
import { telescopeEnums } from '../enums';

type ReportData = {
  id?: number;
  sessionId: number;
  telescopeType: telescopeEnums.TelescopeTypes;
  subject: string;
  magnification: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
};

type ReportModel = Model<ReportData>;

type ModifyReportData = {
  eyepiece: string;
  magnification: string;
  filter: string;
};

type ReportsList = {
  data: Model<ReportModel>[];
  count: number;
};

export {
  ReportData,
  ReportModel,
  ModifyReportData,
  ReportsList,
};
