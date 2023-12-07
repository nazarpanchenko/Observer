import { Request, Response, NextFunction } from 'express';

import conf from '../conf.json';
import { UserData, UserDtoData } from '../shared';
import { UI_BASE_URI } from '../shared/consts';
import db from '../db';
import { ApiError } from '../shared';
import { authProvider } from '../services';

const authController = {
  signup: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const email = req.body.email;

    try {
      const storedUser: UserData | null = await db.models.User.getUser({ email });
      if (storedUser) {
        next(ApiError.badRequest(`User with email ${email} already exists`));
      }

      const userData: UserDtoData = await authProvider.signup(req.body);
      res.cookie('refreshToken', userData.refreshToken, conf.cookies);
      res.send(userData);
    } catch (err: any) {
      next(err);
    }
  },

  signin: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body;

    try {
      const storedUser: UserData = await db.models.User.getUser({ email });
      if (!storedUser) {
        next(ApiError.badRequest(`User with email ${email} does not exist`));
      }

      const userData = await authProvider.signin(password, storedUser);
      res.cookie('refreshToken', storedUser.refreshToken, conf.cookies);
      res.send(userData);
    } catch (err: any) {
      next(err);
    }
  },

  logout: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { refreshToken } = req.cookies;

    try {
      await authProvider.logout(req.body.id, refreshToken);
      res.clearCookie('refreshToken');
      res.status(204).send({ refreshToken, status: 'Logged out' });
    } catch (err: any) {
      next(err);
    }
  },

  verify: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { link } = req.params;

    const userData: UserData | null = await db.models.User.getOne({
      verificationLink: link,
    });
    if (!userData) {
      next(ApiError.badRequest('User verification failed. Verification link is invalid'));
    }

    await authProvider.verify(link);
    res.redirect(UI_BASE_URI);
  },

  forgotPassword: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    res.send({});
  },

  resetPassword: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    res.send({});
  },

  tokenRefresh: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    res.send({});
  },
};

export default authController;
