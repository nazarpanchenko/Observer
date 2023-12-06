import { Request, Response } from 'express';
import { getReasonPhrase } from 'http-status-codes';

import { logger } from '../shared';

const errorLogger =
  (err: any) =>
  async (req: Request, res: Response): Promise<void> => {
    logger.error(err.description);
    res.status(err.code).send({
      errCode: err.code,
      errStatus: getReasonPhrase(err.code),
      errMsg: err.description,
    });
  };

export default errorLogger;
