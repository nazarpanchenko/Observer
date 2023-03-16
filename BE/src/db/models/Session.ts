'use strict';

import { Model } from 'sequelize';

import { sessionEnums } from '../../shared/enums';
import { globalTypes, sessionTypes } from '../../shared/types';
import { PAGINATION_CONFIG } from '../../consts';
import db from '..';

interface SessionAttributes extends sessionTypes.SessionData {}

const sessionModel = (sequelize: any, DataTypes: any) => {
  class Session extends Model<SessionAttributes> implements SessionAttributes {
    id?: number;
    category!: sessionEnums.SessionCategories;
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
        foreignKey: {
          field: 'userId',
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Report, {
        foreignKey: {
          field: 'sessionId',
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
    }

    static async getSessions(query: globalTypes.PaginationConfig) {
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

    static async getOne(id: number) {
      const data = await this.findOne({ where: { id } });
      return data;
    }

    static async save(data: sessionTypes.SessionData) {
      const reportsCount = await db.Report.count();
      const _data = await this.create({ ...data, reportsCount });
      return _data;
    }

    static async delete(id: number) {
      const deletedData = await this.destroy({ where: { id } });
      return deletedData;
    }
  }

  Session.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(sessionEnums.SessionCategories)],
            msg: `category field's value must be one of the following: ${Object.values(
              sessionEnums.SessionCategories
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
