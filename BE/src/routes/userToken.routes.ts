import express from 'express';

import { userTokenController } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { userTokenValidator } from '../validators';

const userTokenRouter = express.Router();

userTokenRouter.post(
  '/refresh',
  userTokenValidator.create,
  handleBadRequest(),
  userTokenController.create
);

export default userTokenRouter;
