'use strict';

import { Model } from 'sequelize';

import { TelescopeTypes } from '../../shared/enums';
import {
  PaginationConfig,
  ReportData,
  ReportsList,
  ReportsListTuple,
  ModifyReportParams,
  ModifiedReportData,
  SequelizeUpdateReportResponse,
  SequelizeDeleteResponse,
} from '../../shared/types';

import { PAGINATION_CONFIG } from '../../consts';
import { containsChar } from '../../utils';

const reportModel = (sequelize: any, DataTypes: any) => {
  class Report extends Model<ReportData> implements ReportData {
    id?: number;
    subject!: string;
    telescopeType!: TelescopeTypes;
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
      this.belongsTo(models.Session, {
        foreignKey: 'sessionId',
        onDelete: 'CASCADE',
      });
      this.hasOne(models.Subject, {
        foreignKey: 'reportId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Telescope, {
        foreignKey: 'reportId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Eyepiece, {
        foreignKey: 'reportId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.BarlowLens, {
        foreignKey: 'reportId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Filter, {
        foreignKey: 'reportId',
        onDelete: 'CASCADE',
      });
    }

    static async getReports(query: PaginationConfig): Promise<ReportsList> {
      const {
        page = PAGINATION_CONFIG.DEFAULT_OFFSET,
        limit = PAGINATION_CONFIG.LIMIT.avg,
      } = query;

      const [data, count]: ReportsListTuple = await Promise.all([
        this.findAll({
          offset: page,
          order: [['id', 'DESC']],
          limit,
        }),
        this.count(),
      ]);
      return { data, count };
    }

    static async getOne(id: number): Promise<ReportData | null> {
      const data = await this.findOne({ where: { id } });
      return data;
    }

    static async save(data: ReportData): Promise<ReportData> {
      const _data = await this.create(data);
      return _data;
    }

    static async modify(
      id: number,
      data: ModifyReportParams
    ): Promise<ModifiedReportData> {
      const [affectedCount, affectedRows]: SequelizeUpdateReportResponse =
        await this.update(
          { ...data },
          {
            where: { id },
            returning: true,
          }
        );
      return { updatedRowsCount: affectedCount, updatedRecord: { ...affectedRows[0] } };
    }

    static async delete(id: number): Promise<SequelizeDeleteResponse> {
      const deletedRowsCount: number = await this.destroy({
        where: { id },
      });
      return { deletedRowsCount };
    }
  }

  Report.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      subject: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      telescopeType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(TelescopeTypes)],
            msg: `telescopeType field's value must be one of the following: ${Object.values(
              TelescopeTypes
            ).join(', ')}`,
          },
        },
      },
      magnification: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          containsChar: containsChar('magnification', 'X'),
        },
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
