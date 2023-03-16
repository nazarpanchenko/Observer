import { Request, Response } from 'express';

import { logger } from '../utils';
import { reportProvider } from '../services';
import { reportTypes } from '../shared/types';

const reportControler = {
  list: async (req: Request, res: Response): Promise<void> => {
    try {
      const list: reportTypes.ReportsList = await reportProvider.getReports(req.query);
      res.send(list);
    } catch (err: any) {
      logger.error(`getReportsList: ${err.message}`);
      res.status(500).send({ errOrigin: 'getReportsList', message: err.message });
    }
  },

  getOne: async (req: Request, res: Response): Promise<void> => {
    try {
      const data: reportTypes.ReportData = await reportProvider.getOne(
        Number(req.params.id)
      );
      res.send(data);
    } catch (err: any) {
      logger.error(`getReport: ${err.message}`);
      res.status(500).send({ errOrigin: 'getReport', message: err.message });
    }
  },

  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const createdRecord: reportTypes.ReportData = await reportProvider.create(req.body);
      res.status(201).send(createdRecord);
    } catch (err: any) {
      logger.error(`createReport: ${err.message}`);
      res.status(500).send({ errOrigin: 'createReport', message: err.message });
    }
  },

  update: async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedRecord: reportTypes.ReportData = await reportProvider.update(
        Number(req.params.id),
        req.body
      );
      res.status(204).send(updatedRecord);
    } catch (err: any) {
      logger.error(`updateReport: ${err.message}`);
      res.status(500).send({ errOrigin: 'updateReport', message: err.message });
    }
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedRecord: reportTypes.ReportData = await reportProvider.delete(
        Number(req.params.id)
      );
      res.status(204).send(deletedRecord);
    } catch (err: any) {
      logger.error(`deleteReport error: ${err.message}`);
      res.status(500).send({ errOrigin: 'deleteReport', message: err.message });
    }
  },
};

export default reportControler;
