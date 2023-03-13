import express from 'express';

import { reportControler } from '../controllers';
import { handleBadRequest } from '../middlewares';
import { reportValidator } from '../validators';

const reportRouter = express.Router();

reportRouter.get(
  '/reports',
  reportValidator.list,
  handleBadRequest(),
  reportControler.list
);

reportRouter.get(
  '/reports/:id',
  reportValidator.getOne,
  handleBadRequest(),
  reportControler.getOne
);

reportRouter.post(
  '/reports',
  reportValidator.create,
  handleBadRequest(),
  reportControler.create
);

reportRouter.put(
  '/reports/:id',
  reportValidator.update,
  handleBadRequest(),
  reportControler.update
);

reportRouter.delete(
  '/reports/:id',
  reportValidator.delete,
  handleBadRequest(),
  reportControler.delete
);

export default reportRouter;
