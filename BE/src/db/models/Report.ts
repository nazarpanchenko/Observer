import { Sequelize, DataType } from 'sequelize-typescript';

import { TELESCOPE_MODELS } from '../../constants';
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
    telescope: {
      type: DataType.STRING(40),
      allowNull: false,
      validate: {
        isIn: {
          args: [Object.values(TELESCOPE_MODELS)],
          msg: `telescope field's value must be one of the following: ${Object.values(
            TELESCOPE_MODELS
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
