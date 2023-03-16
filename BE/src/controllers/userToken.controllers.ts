import { Request, Response } from 'express';

import { logger } from '../utils';
import { userTokenProvider } from '../services';

const userTokenControler = {
  create: async (req: Request, res: Response) => {
    const { userId, refreshToken } = req.body;

    try {
      const storedUser = await userTokenProvider.create(userId, refreshToken);
      if (!storedUser) {
        throw new Error(
          `User (ID ${req.body.userId}) associated with the given token doesn't exist`
        );
      }

      res.send(storedUser);
    } catch (err: any) {
      logger.error(err.message);
      res.status(500).send(`createToken error: ${err.message}`);
    }
  },
};

export default userTokenControler;
