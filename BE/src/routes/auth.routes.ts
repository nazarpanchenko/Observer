import express from 'express';

import { authControler } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { authValidator } from '../validators';

const userRouter = express.Router();

userRouter.post(
  '/signup',
  authValidator.signup,
  handleBadRequest(),
  authControler.signup
);

userRouter.post(
  '/signin',
  authValidator.signin,
  handleBadRequest(),
  authControler.signin
);

userRouter.post(
  '/logout',
  authValidator.logout,
  handleBadRequest(),
  authControler.logout
);

userRouter.post(
  '/verify-user/:link',
  authValidator.verifyUser,
  handleBadRequest(),
  authControler.verifyUser
);

userRouter.post(
  '/reset-password',
  authValidator.resetPassword,
  handleBadRequest(),
  authControler.resetPassword
);

export default userRouter;
