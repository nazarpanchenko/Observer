'use strict';

import { Model } from 'sequelize';

import { reportTypes } from '../../types';
import * as validator from '../../consts';

interface ReportAttributes {
  id?: number;
  subject: string;
  telescopeModel: reportTypes.TelescopeModels;
  telescopeType: reportTypes.TelescopeTypes;
  eyepiece: string;
  filter?: string;
  magnification: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
}

const reportModel = (sequelize: any, DataTypes: any) => {
  class Report
    extends Model<ReportAttributes>
    implements ReportAttributes
  {
    id?: number;
    subject!: string;
    telescopeModel!: reportTypes.TelescopeModels;
    telescopeType!: reportTypes.TelescopeTypes;
    eyepiece!: string;
    filter?: string;
    magnification!: string;
    observationRealDurationMin!: number;
    observationVirtualDurationMin!: number;
    observationStartDate!: Date;
    observationEndDate!: Date;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }

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

  Report.init(
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
      telescopeModel: {
        type: DataTypes.STRING(30),
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
        type: DataTypes.STRING(20),
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
      sequelize,
      modelName: 'Report',
      tableName: 'reports',
    }
  );

  return Report;
};

export default reportModel;
