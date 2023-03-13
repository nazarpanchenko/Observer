import express from 'express';

import { userControler } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { userValidator } from '../validators';

const userRouter = express.Router();

userRouter.post(
  '/signup',
  userValidator.signup,
  handleBadRequest(),
  userControler.signup
);

userRouter.post(
  '/signin',
  userValidator.signin,
  handleBadRequest(),
  userControler.signin
);

userRouter.post(
  '/logout',
  userValidator.logout,
  handleBadRequest(),
  userControler.logout
);

userRouter.post(
  '/verify-user/:link',
  userValidator.verifyUser,
  handleBadRequest(),
  userControler.verifyUser
);

export default userRouter;
