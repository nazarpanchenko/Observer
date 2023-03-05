import startServer from './server';

const {
  DB_HOST = '',
  DB_PORT = 3306,
  DB_USER = '',
  DB_PASS = '',
} = process.env;

startServer({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASS,
});
