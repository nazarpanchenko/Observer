import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import conf from '../conf.json';
import { UserData, UserDtoData } from '../shared/types';
import db from '../db';
import { ApiError } from '../utils';
import { authProvider } from '../services';

const authController = {
  signup: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const email = req.body.email;

    try {
      const storedUser: UserData | null = await db.models.User.getUser({ email });
      if (storedUser) {
        next(
          new ApiError(
            'Signup failed',
            `User with email ${email} already exists`,
            String(StatusCodes.CONFLICT)
          )
        );
      }

      const userData: UserDtoData = await authProvider.signup(req.body);
      res.cookie('refreshToken', userData.refreshToken, conf.cookies);
      res.send(userData);
    } catch (err: any) {
      next(err);
    }
  },

  signin: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.send({});
  },

  logout: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.send({});
  },

  verifyUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.send({});
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
