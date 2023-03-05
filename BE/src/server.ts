import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

import { reportRouter } from './routes';
import { createDb } from './db';
import { logger } from './utils';
import * as dbTypes from './types/db.types';
import { API_PREFIX } from './constants';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.use(API_PREFIX, reportRouter);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Application server is operational');
});

process.on('uncaughtException', (err) => {
  logger.error(`uncaughtException: ${err}'`);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error(`unhandledRejection: ${err}'`);
  process.exit(1);
});

const startServer = (dbConf: dbTypes.DbConf) => {
  const PORT = process.env.PORT || 9000;

  try {
    app.listen(PORT, async () => {
      logger.info(`Server is listening on the port ${PORT}`);
      await createDb(dbConf);
      logger.info(`Database has been successfully created`);
    });
  } catch (err: any) {
    throw new Error(err);
  }
};

export default startServer;
