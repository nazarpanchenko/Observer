import { Request, Response } from 'express';

import { ReportExpressControler } from '../types/report.types';
import Report from '../db/models/Report';
import { logger } from '../utils';

const reportControler: ReportExpressControler = {
  list: async (req: Request, res: Response) => {
    try {
      const reports = await Report.findAll();
      res.send(reports);
    } catch (err) {
      const _err =
        err instanceof Error
          ? err.message
          : 'Fetch reports failed: uncaughtException';
      logger.error(_err);

      res.status(500).send(_err);
    }
  },
};

export default reportControler;
