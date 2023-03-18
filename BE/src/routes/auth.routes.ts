import express from 'express';

import { authController } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { authValidator } from '../validators';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  authValidator.signup,
  handleBadRequest(),
  authController.signup
);

authRouter.post(
  '/signin',
  authValidator.signin,
  handleBadRequest(),
  authController.signin
);

authRouter.post(
  '/logout',
  authValidator.logout,
  handleBadRequest(),
  authController.logout
);

authRouter.post(
  '/verify-user/:link',
  authValidator.verifyUser,
  handleBadRequest(),
  authController.verifyUser
);

authRouter.post(
  '/reset-password',
  authValidator.resetPassword,
  handleBadRequest(),
  authController.resetPassword
);

export default authRouter;
