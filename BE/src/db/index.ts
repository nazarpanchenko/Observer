'use strict';

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { Sequelize, Dialect, DataTypes, Model } from 'sequelize';

import conf from '../conf.json';
import { DbConf, DbInstance } from '../shared';

const {
  DB_NAME = '',
  DB_HOST = '',
  DB_PORT = 3306,
  DB_USER = '',
  DB_PASS = '',
} = process.env;

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

const db: DbInstance = {
  sequelize,
  Sequelize,
  models: {},
};

fs.readdirSync(path.join(__dirname, 'models'))
  .filter((modelName: string) => modelName.slice(-3) === '.ts')
  .forEach((modelName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const _sequelize = require(`${__dirname}/models/${modelName}`);
    const model: Model = _sequelize.default(sequelize, DataTypes);
    const _modelName: string = modelName.slice(0, modelName.length - 3);
    db.models[_modelName] = model;
  });

Object.keys(db.models).forEach((modelName: string) => {
  if (db.models[modelName].associate) {
    db.models[modelName].associate(db.models);
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
