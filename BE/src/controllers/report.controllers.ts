import { Request, Response } from 'express';

import { logger } from '../utils';
import { reportProvider } from '../services';

const reportControler = {
  list: async (req: Request, res: Response) => {
    try {
      const list = await reportProvider.getReports(req.query);        
      res.send(list);
    } catch (err: any) {
      logger.error(`getReportsList: ${err.message}`);
      res
        .status(500)
        .send({ errOrigin: 'getReportsList', message: err.message });
    }
  },

  getOne: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const report = await reportProvider.getOne(Number(id));
      res.send(report);
    } catch (err: any) {
      logger.error(`getReport: ${err.message}`);
      res.status(500).send({ errOrigin: 'getReport', message: err.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const newReport = await reportProvider.create(req.body);
      res.status(201).send(newReport);
    } catch (err: any) {
      logger.error(`createReport: ${err.message}`);
      res
        .status(500)
        .send({ errOrigin: 'createReport', message: err.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      await reportProvider.update(Number(req.params.id), req.body);
      res.status(204).send();
    } catch (err: any) {
      logger.error(`updateReport: ${err.message}`);
      res
        .status(500)
        .send({ errOrigin: 'updateReport', message: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await reportProvider.delete(Number(req.params.id));
      res.status(204).send();
    } catch (err: any) {
      logger.error(`deleteReport error: ${err.message}`);
      res
        .status(500)
        .send({ errOrigin: 'deleteReport', message: err.message });
    }
  },
};

export default reportControler;
