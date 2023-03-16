'use strict';

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { Sequelize, Dialect, DataTypes } from 'sequelize';

import conf from '../conf.json';
import { DbConf } from '../shared/types/db.types';

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

fs.readdirSync(path.join(__dirname, 'models'))
  .filter((modelName: string) => modelName.slice(-3) === '.ts')
  .forEach((modelName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const _sequelize = require(`${__dirname}/models/${modelName}`);
    const model = _sequelize.default(sequelize, DataTypes);
    const _modelName = modelName.slice(0, modelName.length - 3);
    db[_modelName] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export const createDB = async (dbConf: DbConf) => {
  const con = await mysql.createConnection(dbConf);
  await con.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
  await con.end();
};

export default db;
