import express from 'express';

import { reportController } from '../controllers';
import { handleRouteValidation } from '../middlewares';
import { reportValidator } from '../validators';

const reportRouter = express.Router();

reportRouter.get(
  '/reports',
  reportValidator.list,
  handleRouteValidation(),
  reportController.list
);

reportRouter.get(
  '/reports/:id',
  reportValidator.getOne,
  handleRouteValidation(),
  reportController.getOne
);

reportRouter.post(
  '/reports',
  reportValidator.create,
  handleRouteValidation(),
  reportController.create
);

reportRouter.put(
  '/reports/:id',
  reportValidator.update,
  handleRouteValidation(),
  reportController.update
);

reportRouter.delete(
  '/reports/:id',
  reportValidator.delete,
  handleRouteValidation(),
  reportController.delete
);

export default reportRouter;
