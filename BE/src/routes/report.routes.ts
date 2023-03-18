import express from 'express';

import { reportController } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { reportValidator } from '../validators';

const reportRouter = express.Router();

reportRouter.get(
  '/reports',
  reportValidator.list,
  handleBadRequest(),
  reportController.list
);

reportRouter.get(
  '/reports/:id',
  reportValidator.getOne,
  handleBadRequest(),
  reportController.getOne
);

reportRouter.post(
  '/reports',
  reportValidator.create,
  handleBadRequest(),
  reportController.create
);

reportRouter.put(
  '/reports/:id',
  reportValidator.update,
  handleBadRequest(),
  reportController.update
);

reportRouter.delete(
  '/reports/:id',
  reportValidator.delete,
  handleBadRequest(),
  reportController.delete
);

export default reportRouter;
