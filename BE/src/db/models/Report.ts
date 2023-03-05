import { Sequelize, DataType } from 'sequelize-typescript';

import * as enums from '../../constants';
import sequelize from '..';

const Report = (sequelize as Sequelize).define(
  'Report',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subject: {
      type: DataType.STRING(30),
      allowNull: false,
    },
    telescopeType: {
      type: DataType.STRING(30),
      allowNull: false,
      validate: {
        isIn: {
          args: [Object.values(enums.TELESCOPE_MODELS)],
          msg: `telescopeModel field's value must be one of the following: ${Object.values(
            enums.TELESCOPE_MODELS
          ).join(', ')}`,
        },
      },
    },
    telescopeModel: {
      type: DataType.STRING(20),
      allowNull: false,
      validate: {
        isIn: {
          args: [Object.values(enums.TELESCOPE_TYPES)],
          msg: `telescopeType field's value must be one of the following: ${Object.values(
            enums.TELESCOPE_TYPES
          ).join(', ')}`,
        },
      },
    },
    eyepiece: {
      type: DataType.STRING(60),
      allowNull: false,
    },
    magnification: {
      type: DataType.STRING(5),
      allowNull: false,
      validate: {
        containsX: () =>
          `magnification field's value must include the character "X"`,
      },
    },
    filter: {
      type: DataType.STRING(60),
      defaultValue: '',
    },
    observationRealDurationMin: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    observationVirtualDurationMin: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    observationStartDate: {
      type: DataType.DATE,
      allowNull: false,
    },
    observationEndDate: {
      type: DataType.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'reports',
  }
);

export default Report;
