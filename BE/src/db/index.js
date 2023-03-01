'use strict';

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import Sequelize from 'sequelize';

const db = {};
let sequelize;

export const initDB = async () => {
  const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST || '',
    port: Number(DB_PORT) || 3306,
    dialect: 'mysql',
  });
  db.sequelize = sequelize;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: null,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);

  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== path.basename(file) &&
        file.slice(-3) === '.ts'
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
