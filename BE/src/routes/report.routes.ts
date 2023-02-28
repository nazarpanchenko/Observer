import express from 'express';
import { reportControler } from '../controllers';

const reportRouter = express.Router();

reportRouter.use('/reports', reportControler.list);

export default reportRouter;
