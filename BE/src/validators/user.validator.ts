import { param, query, body } from 'express-validator';

const userValidator = {
  signup: [
    body('email').isEmail(),
    body('username').isString().isLength({ min: 2, max: 15 }),
    body('password').isStrongPassword(),
  ],

  signin: [],

  logout: [],

  verifyUser: [],
};

export default userValidator;
