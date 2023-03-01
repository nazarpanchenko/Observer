import { Sequelize, DataTypes } from 'sequelize';

import { TELESCOPE_TYPE } from '../../constants';
import { initEnv } from '../../utils';

initEnv();
const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME || '', DB_USER || '', DB_PASS || '', {
  host: DB_HOST || '',
  port: Number(DB_PORT) || 3306,
  dialect: 'mysql',
});

const Report = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subject: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    telescope: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        isIn: {
          args: [[TELESCOPE_TYPE]],
          msg: `telescope field's value must be one of the following: ${Object.values(
            TELESCOPE_TYPE
          ).join(', ')}`,
        },
      },
    },
    eyepiece: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    magnification: {
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        containsX: () =>
          `magnification field's value must include the character "X"`,
      },
    },
    filter: {
      type: DataTypes.STRING(60),
      defaultValue: '',
    },
    observationRealDurationMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observationVirtualDurationMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observationStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observationEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'reports',
    timestamps: true,
  }
);

export default Report;