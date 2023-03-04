import { Model } from 'sequelize';

enum TelescopeModels {
  'GSO DOB 10',
  'Levenhuk Skyline Base 110S',
}

type ReportData = {
  id?: number;
  subject: string;
  telescope: TelescopeModels;
  eyepiece: string;
  filter?: string;
  magnification: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

type ReportModel = Model<ReportData>;

type ReportsList = {
  data: Model<ReportModel>[];
  count: number;
};

export { ReportData, ReportModel, ReportsList };
