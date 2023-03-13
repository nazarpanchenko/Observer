'use strict';

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { Sequelize, Dialect, DataTypes } from 'sequelize';

import conf from '../conf.json';
import { DbConf } from '../types/db.types';

const {
  DB_NAME = '',
  DB_HOST = '',
  DB_PORT = 3306,
  DB_USER = '',
  DB_PASS = '',
} = process.env;

const db: any = {};
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: conf.db.dialect as Dialect | undefined,
  pool: {
    max: conf.db.max_connections_number,
    idle: conf.db.connection_idle_time,
    acquire: conf.db.reconnect_interval,
    evict: conf.db.malfunctioned_connection_checks,
  },
  define: {
    timestamps: true,
  },
  query: {
    raw: true,
  },
});

fs.readdirSync(path.join(__dirname, 'models')).forEach(async (file: string) => {
  const _sequelize = await import(`${__dirname}/models/${file}`);
  const model = _sequelize.default(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    console.log('ASSOCIATION: ', db[modelName].associate);
  }
  console.log('ASSOCIATION: ');
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export const connectToDB = async (dbConf: DbConf) => {
  const connection = await mysql.createConnection(dbConf);
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
  await connection.end();
  await sequelize.sync();
};

export default db;
