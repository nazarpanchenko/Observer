import { Request, Response } from 'express';

import conf from '../conf.json';
import { userTypes } from '../shared/types';
import db from '../db';
import { logger } from '../utils';
import { userProvider } from '../services';

const userControler = {
  signup: async (req: Request, res: Response) => {
    const email = req.body.email;

    try {
      const storedUser: userTypes.UserModel | null = await db.User.getUser('email', email);
      if (storedUser) {
        throw new Error(`User with email ${email} already exists`);
      }

      const userData = await userProvider.signup(req.body);
      res.cookie('refreshToken', userData.refreshToken, conf.cookies);
      res.send(userData);
    } catch (err: any) {
      logger.error(`signup: ${err.message}`);
      res.status(500).send({ errOrigin: 'signup', message: err.message });
    }
  },

  signin: async (req: Request, res: Response) => {},

  logout: async (req: Request, res: Response) => {},

  verifyUser: async (req: Request, res: Response) => {},
};

export default userControler;
