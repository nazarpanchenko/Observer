import { Request, Response } from 'express';

import db from '../db';
import { logger } from '../utils';
import { userTokenProvider } from '../services';

const userTokenControler = {
  create: async (req: Request, res: Response) => {
    const storedUser = await db.UserToken.findOne({
      where: { userId: req.body.userId },
    });
    if (!storedUser) {
      throw new Error(
        `User (ID ${req.body.userId}) associated with the given token doesn't exist`
      );
    }

    try {
    } catch (err) {
      logger.error(err);
      res.status(500).send(err);
    }
  },
};

export default userTokenControler;
