'use strict';

import { Model } from 'sequelize';

import {
  PaginationConfig,
  ReportParams,
  ReportData,
  ReportsList,
  ReportsListTuple,
  ModifyReportParams,
  ModifiedReportData,
  SequelizeUpdateReportResponse,
  SequelizeDeleteResponse,
  containsChar,
} from '../../shared';

import { PAGINATION_CONFIG } from '../../consts';

const reportModel = (sequelize: any, DataTypes: any) => {
  class Report extends Model<ReportData> implements ReportData {
    id?: number;
    subject!: string;
    telescopeModel!: string;
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
        foreignKey: {
          name: 'sessionId',
          allowNull: false,
        },
      });
      this.hasMany(models.Subject, {
        foreignKey: {
          name: 'reportId',
          allowNull: false,
        },
      });
      this.hasMany(models.Telescope, {
        foreignKey: 'reportId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Eyepiece, {
        foreignKey: {
          name: 'reportId',
          allowNull: false,
        },
      });
      this.hasMany(models.BarlowLens, {
        foreignKey: {
          name: 'reportId',
          allowNull: false,
        },
      });
      this.hasMany(models.Filter, {
        foreignKey: {
          name: 'reportId',
          allowNull: false,
        },
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
      const data: ReportData | null = await this.findOne({ where: { id } });
      return data;
    }

    static async save(data: ReportParams): Promise<ReportData> {
      const _data: ReportData = await this.create(data);
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
      telescopeModel: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      magnification: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          containsChar: (char: string) => containsChar('magnification', char, ['X']),
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
