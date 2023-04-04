import { Request, Response, NextFunction } from 'express';

import { UserData, UserTokenData } from '../shared/types';
import { ApiError } from '../utils';
import db from '../db';
import { userTokenProvider } from '../services';

const userTokenController = {
  create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId, refreshToken } = req.body;

    try {
      const storedUser: UserData = await db.models.User.getUser({ id: userId });
      if (!storedUser) {
        throw new ApiError(
          `User (ID ${userId}) associated with the given token doesn't exist`
        );
      }

      const storedToken: UserTokenData = await userTokenProvider.create(
        userId,
        refreshToken
      );
      res.send(storedToken);
    } catch (err: any) {
      next(err);
    }
  },
};

export default userTokenController;
