import startServer from './server';

const { DB_PORT, DB_HOST = '', DB_USER = '', DB_PASS = '' } = process.env;

startServer({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASS,
});
