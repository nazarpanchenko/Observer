import { param, body, cookie } from 'express-validator';

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

  logout: [
    cookie('refreshToken').isString(),
  ],

  verify: [
    param('link').isString(),
  ],

  forgotPassword: [],

  resetPassword: [],

  tokenRefresh: [],
};

export default authValidator;
