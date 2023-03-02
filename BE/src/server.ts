import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

import { API_PREFIX } from './constants';
import { logger } from './utils';
import { initDB } from './db';

import { reportRouter } from './routes';

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

const startServer = () => {
  const PORT = process.env.PORT || 9000;

  try {
    app.listen(PORT, async () => {
      logger.info(`Server is listening on the port ${PORT}`);
      await initDB();
    });
  } catch (err: any) {
    throw new Error(err);
  }
};

export default startServer;
