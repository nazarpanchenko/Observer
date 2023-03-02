import dotenv from 'dotenv';
import path from 'path';

import startServer from './server';

dotenv.config({
  path: path.resolve(__dirname, `./../.env.${process.env.NODE_ENV}`),
});

startServer();
