import { param, query, body } from 'express-validator';

const userValidator = {
  signup: [
    body('email').isEmail().isLength({ max: 50 }),
    body('firstName').isString().isLength({ min: 2, max: 20 }),
    body('lastName').isString().isLength({ min: 2, max: 30 }),
    body('password').isStrongPassword(),
  ],

  signin: [],

  logout: [],

  verifyUser: [],

  forgotPassword: [],
};

export default userValidator;
