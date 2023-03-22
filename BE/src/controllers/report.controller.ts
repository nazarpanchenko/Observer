import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import { reportProvider } from '../services';
import { ReportData, ReportsList } from '../shared/types';
import { ApiError } from '../utils';

const reportController = {
  list: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const list: ReportsList = await reportProvider.getReports(req.query);
      res.send(list);
    } catch (err: any) {
      next(err);
    }
  },

  getOne: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
      const data: ReportData = await reportProvider.getOne(Number(id));
      if (data) {
        next(
          new ApiError(
            'getReportByID failed',
            `Report with id ${id} already exists`,
            String(StatusCodes.CONFLICT)
          )
        );
      }

      res.send(data);
    } catch (err: any) {
      next(err);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const createdRecord: ReportData = await reportProvider.create(req.body);
      res.status(201).send(createdRecord);
    } catch (err: any) {
      next(err);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const updatedRecord: ReportData = await reportProvider.update(
        Number(req.params.id),
        req.body
      );
      res.status(204).send(updatedRecord);
    } catch (err: any) {
      next(err);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const deletedRecord: ReportData = await reportProvider.delete(
        Number(req.params.id)
      );
      res.status(204).send(deletedRecord);
    } catch (err: any) {
      next(err);
    }
  },
};

export default reportController;
