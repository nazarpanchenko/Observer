import dotenv from 'dotenv';
import path from 'path';
import { Sequelize, Dialect } from 'sequelize';

import conf from '../conf.json';

const initDbModel = () => {
  dotenv.config({
    path: path.resolve(__dirname, `./../../.env.${process.env.NODE_ENV}`),
  });

  const {
    DB_PORT,
    DB_NAME = '',
    DB_HOST = '',
    DB_USER = '',
    DB_PASS = '',
  } = process.env;

  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: conf.db.dialect as Dialect,
    pool: {
      max: conf.db.max_connections_number,
      idle: conf.db.connection_idle_time,
      acquire: conf.db.reconnect_interval,
      evict: conf.db.malfunctioned_connection_checks,
    },
  });

  return sequelize;
};

export { initDbModel };
