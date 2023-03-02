import { Request, Response, NextFunction } from 'express';
import { Model } from 'sequelize';

enum TelescopeTypes {
  'GSO DOB 10',
  'Levenhuk Skyline Base 110S',
}

type ReportRouteControler = {
  list: (req: Request, res: Response, next?: NextFunction) => void;
  getOne: (req: Request, res: Response, next?: NextFunction) => void;
  create: (req: Request, res: Response, next?: NextFunction) => void;
  update: (req: Request, res: Response, next?: NextFunction) => void;
  delete: (req: Request, res: Response, next?: NextFunction) => void;
};

type ReportModel = {
  id?: number;
  subject: string;
  telescope: TelescopeTypes;
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

type FetchedReports = {
  data: Model[];
  count: number;
};

type GetReport = Model | null;

type CreateReport = Model<any, any>;

export {
  ReportRouteControler,
  ReportModel,
  FetchedReports,
  GetReport,
  CreateReport,
};
