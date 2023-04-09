import express from 'express';

import { authController } from '../controllers';
import { handleRouteValidation } from '../middlewares';
import { authValidator } from '../validators';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  authValidator.signup,
  handleRouteValidation(),
  authController.signup
);

authRouter.post(
  '/signin',
  authValidator.signin,
  handleRouteValidation(),
  authController.signin
);

authRouter.post(
  '/logout',
  authValidator.logout,
  handleRouteValidation(),
  authController.logout
);

authRouter.get(
  '/verify-user/:link',
  authValidator.verifyUser,
  handleRouteValidation(),
  authController.verifyUser
);

authRouter.post(
  '/forgot-password',
  authValidator.forgotPassword,
  handleRouteValidation(),
  authController.forgotPassword
);

authRouter.post(
  '/reset-password',
  authValidator.resetPassword,
  handleRouteValidation(),
  authController.resetPassword
);

authRouter.get(
  '/token-refresh',
  authValidator.tokenRefresh,
  handleRouteValidation(),
  authController.tokenRefresh
);

export default authRouter;
