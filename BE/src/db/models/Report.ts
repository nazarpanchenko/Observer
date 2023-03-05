import { Sequelize, DataType } from 'sequelize-typescript';

import * as validator from '../../constants';
import sequelize from '..';
import * as reportTypes from '../../types/report.types';

const Model = (sequelize as Sequelize).define(
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
    telescopeModel: {
      type: DataType.STRING(30),
      allowNull: false,
      validate: {
        isIn: {
          args: [Object.values(validator.TELESCOPE_MODELS)],
          msg: `telescopeModel field's value must be one of the following: ${Object.values(
            validator.TELESCOPE_MODELS
          ).join(', ')}`,
        },
      },
    },
    telescopeType: {
      type: DataType.STRING(20),
      allowNull: false,
      validate: {
        isIn: {
          args: [Object.values(validator.TELESCOPE_TYPES)],
          msg: `telescopeType field's value must be one of the following: ${Object.values(
            validator.TELESCOPE_TYPES
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

class Report extends Model {
  static async getReports() {
    return await Promise.all([Report.findAll(), Report.count()]);
  }

  static async getOne(id: number) {
    return await Report.findOne({ where: { id } });
  }

  static async save(data: reportTypes.ReportData) {
    return await Report.create(data);
  }

  static async modify(id: number, data: reportTypes.ModifyReportData) {
    return await Report.update(
      { ...data },
      {
        where: { id },
      }
    );
  }

  static async delete(id: number) {
    return await Report.destroy({ where: { id } });
  }
}

export default Report;
