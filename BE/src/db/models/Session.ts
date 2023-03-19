'use strict';

import { Model } from 'sequelize';

import { SessionCategories } from '../../shared/enums';
import {
  PaginationConfig,
  SequelizeDeleteResponse,
  SessionData,
} from '../../shared/types';
import { PAGINATION_CONFIG } from '../../consts';
import db from '..';

const sessionModel = (sequelize: any, DataTypes: any) => {
  class Session extends Model<SessionData> implements SessionData {
    id?: number;
    category!: SessionCategories;
    reportsCount!: number;
    sessionRealDurationMin!: number;
    sessionVirtualDurationMin!: number;
    sessionStartDate!: Date;
    sessionEndDate!: Date;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Report, {
        foreignKey: 'sessionId',
        onDelete: 'CASCADE',
      });
    }

    static async getSessions(query: PaginationConfig) {
      const {
        page = PAGINATION_CONFIG.DEFAULT_OFFSET,
        limit = PAGINATION_CONFIG.LIMIT.avg,
      } = query;

      return await Promise.all([
        this.findAll({
          offset: page,
          order: [['id', 'DESC']],
          limit,
        }),
        this.count(),
      ]);
    }

    static async getOne(id: number): Promise<SessionData | null> {
      const data: SessionData | null = await this.findOne({ where: { id } });
      return data;
    }

    static async save(data: SessionData): Promise<SessionData> {
      const reportsCount: number = await db.Report.count();
      const _data: SessionData = await this.create({
        ...data,
        reportsCount,
      });
      return _data;
    }

    static async delete(id: number): Promise<SequelizeDeleteResponse> {
      const deletedRowsCount: number = await this.destroy({ where: { id } });
      return { deletedRowsCount };
    }
  }

  Session.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(SessionCategories)],
            msg: `category field's value must be one of the following: ${Object.values(
              SessionCategories
            ).join(', ')}`,
          },
        },
      },
      reportsCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sessionRealDurationMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sessionVirtualDurationMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sessionStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sessionEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Session',
      tableName: 'sessions',
    }
  );

  return Session;
};

export default sessionModel;
