import { Request, Response } from 'express';
import { getReasonPhrase } from 'http-status-codes';

import { logger } from '../utils';

const logError =
  (err: any) =>
  async (req: Request, res: Response): Promise<void> => {
    logger.error(err.message);
    res
      .status(err.code)
      .send({
        errCode: err.code,
        errStatus: getReasonPhrase(err.code),
        errMsg: err.message,
      });
  };

export default logError;
