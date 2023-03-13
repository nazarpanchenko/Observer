import express from 'express';

import { userTokenControler } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { userTokenValidator } from '../validators';

const userTokenRouter = express.Router();

userTokenRouter.post(
  '/refresh',
  userTokenValidator.create,
  handleBadRequest(),
  userTokenControler.create
);

export default userTokenRouter;
