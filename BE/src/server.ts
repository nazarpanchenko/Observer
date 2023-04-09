import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

import * as routers from './routes';
import { handleErrors } from './middlewares';
import db, { createDB } from './db';
import { logger } from './utils';
import { DbConf } from './shared/types';
import { API_PREFIX } from './consts';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.use(`${API_PREFIX}/auth`, routers.authRouter);
app.use(`${API_PREFIX}/token`, routers.userTokenRouter);
app.use(API_PREFIX, routers.reportRouter);

app.use(handleErrors);

app.get('/health', (req: Request, res: Response): void => {
  res.send('Application server is operational');
});

process.on('uncaughtException', err => {
  logger.error(`uncaughtException: ${err}'`);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  logger.error(`unhandledRejection: ${err}'`);
  process.exit(1);
});

const startServer = (dbConf: DbConf): void => {
  const PORT = process.env.PORT || 9000;

  try {
    app.listen(PORT, async () => {
      logger.info(`Server is listening on the port ${PORT}`);
      await createDB(dbConf);
      await db.sequelize.sync();
      logger.info(`Database has been successfully created`);
    });
  } catch (err: any) {
    throw new Error(err);
  }
};

export default startServer;
