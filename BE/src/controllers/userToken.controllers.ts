import { Request, Response } from 'express';

import { logger } from '../utils';
import { userTypes, userTokenTypes } from '../shared/types';
import db from '../db';
import { userTokenProvider } from '../services';

const userTokenControler = {
  create: async (req: Request, res: Response): Promise<void> => {
    const { userId, refreshToken } = req.body;

    try {
      const storedUser: userTypes.UserData = await db.User.getUser('id', userId);
      if (!storedUser) {
        throw new Error(
          `User (ID ${userId}) associated with the given token doesn't exist`
        );
      }

      const storedToken: userTokenTypes.UserToken = await userTokenProvider.create(
        userId,
        refreshToken
      );
      res.send(storedToken);
    } catch (err: any) {
      logger.error(err.message);
      res.status(500).send(`createToken error: ${err.message}`);
    }
  },
};

export default userTokenControler;
