'use strict';

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import Sequelize from 'sequelize';

import conf from '../conf.json';

const db = {};
let sequelize;

export const initDB = async () => {
  const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
  await connection.end();

  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: conf.db.dialect,
    pool: {
      max: conf.db.max_connections_number,
      idle: conf.db.connection_idle_time,
      acquire: conf.db.reconnect_interval,
      evict: conf.db.malfunctioned_connection_checks,
    },
  });
  db.sequelize = sequelize;

  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== path.basename(file) &&
        file.slice(-3) === '.ts' &&
        file.slice(0) !== 'index.ts'
      );
    })
    .forEach((file) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const model = require(path.join(__dirname, file))(
        sequelize,
        Sequelize.DataTypes
      );
      db.sequelize.models[model.name] = model;
    });

  Object.keys(db.sequelize.models).forEach((modelName) => {
    if (db.sequelize.models[modelName].associate) {
      db.sequelize.models[modelName].associate(db.sequelize.models);
    }
  });
};

export default db;
