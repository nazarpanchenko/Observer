import { param, query, body } from 'express-validator';

const authValidator = {
  signup: [
    body('email').isEmail().isLength({ max: 50 }),
    body('firstName').isString().isLength({ min: 2, max: 20 }),
    body('lastName').isString().isLength({ min: 2, max: 30 }),
    body('password').isStrongPassword(),
  ],

  signin: [
    body('email').isEmail().isLength({ max: 50 }),
    body('firstName').isString().isLength({ min: 2, max: 20 }),
  ],

  logout: [],

  verifyUser: [],

  forgotPassword: [],

  resetPassword: [],

  tokenRefresh: [],
};

export default authValidator;
