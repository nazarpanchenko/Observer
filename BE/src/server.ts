import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { API_PREFIX } from './constants';
import { logger } from './utils';
import { initDB } from './models';

import { reportRouter } from './routes';

const app = express();

app.use(API_PREFIX, reportRouter);
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  morgan(
    process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development'
      ? 'dev'
      : 'combined'
  )
);

app.get('/health', (req: Request, res: Response) => {
  res.status(200);
  res.send('Application server is operational');
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
  } catch (err: unknown) {
    throw new Error(
      err instanceof Error
        ? err.message
        : 'Unexpected derver initialization error'
    );
  }
};

export default startServer;
