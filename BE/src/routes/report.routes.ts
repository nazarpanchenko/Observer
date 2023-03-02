import express from 'express';

import { reportControler } from '../controllers';
import { handleBadRequest } from '../middlewares';
import {
  getReportValidator,
  createReportValidator,
  updateReportValidator,
  deleteReportValidator,
} from '../validators/report.validator';

const reportRouter = express.Router();

reportRouter.get('/reports', reportControler.list);

reportRouter.get(
  '/reports/:id',
  getReportValidator,
  handleBadRequest(),
  reportControler.getOne
);

reportRouter.post(
  '/reports',
  createReportValidator,
  handleBadRequest(),
  reportControler.create
);

reportRouter.put(
  '/reports/:id',
  updateReportValidator,
  handleBadRequest(),
  reportControler.update
);

reportRouter.delete(
  '/reports/:id',
  deleteReportValidator,
  handleBadRequest(),
  reportControler.delete
);

export default reportRouter;
