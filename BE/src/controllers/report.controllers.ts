import { Request, Response } from 'express';

import { logger } from '../utils';

import { reportProvider } from '../services';

const reportControler = {
  list: async (req: Request, res: Response) => {
    try {
      const { data, count } = await reportProvider.getReports();
      res.send({ data, count });
    } catch (err) {
      logger.error(err);
      res.status(500).send(err);
    }
  },
  getOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const report = await reportProvider.getOne(Number(id));

      if (!report) {
        return res
          .status(400)
          .send(
            `Bad request: report with id ${id} doesn't exist in the database`
          );
      }
      res.send(report);
    } catch (err) {
      logger.error(err);
      res.status(500).send(err);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const newReport = await reportProvider.create(req.body);
      res.status(201).send(newReport);
    } catch (err) {
      logger.error(err);
      res.status(500).send(err);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      await reportProvider.update(Number(req.params.id), req.body);
      res.status(204).send();
    } catch (err) {
      logger.error(err);
      res.status(500).send(err);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await reportProvider.delete(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      logger.error(err);
      res.status(500).send(err);
    }
  },
};

export default reportControler;
