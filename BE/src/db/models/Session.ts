'use strict';

import { Model } from 'sequelize';

import { sessionEnums } from '../../enums';
import { globalTypes, sessionTypes } from '../../types';
import { PAGINATION_CONFIG } from '../../consts';

interface SessionAttributes extends sessionTypes.SessionData {}

const sessionModel = (sequelize: any, DataTypes: any) => {
  class Session extends Model<SessionAttributes> implements SessionAttributes {
    id?: number;
    category!: sessionEnums.SessionTypes;
    userId!: number;
    username!: string;
    reportsCount!: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User);
      this.hasMany(models.Report, {
        foreignKey: 'sessionId',
      });
    }

    static async getSessions(query: globalTypes.PaginationConfig) {
      const {
        page = PAGINATION_CONFIG.DEFAULT_OFFSET,
        limit = PAGINATION_CONFIG.LIMIT.avg,
      } = query;

      return await Promise.all([
        Session.findAll({
          offset: page,
          order: [['id', 'DESC']],
          limit,
        }),
        Session.count(),
      ]);
    }

    static async getOne(id: number) {
      const data = await Session.findOne({ where: { id } });
      return data;
    }

    static async save(data: sessionTypes.SessionData) {
      const _data = await Session.create(data);
      return _data;
    }

    static async delete(id: number) {
      const deletedData = await Session.destroy({ where: { id } });
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
            args: [Object.values(sessionEnums.SessionTypes)],
            msg: `category field's value must be one of the following: ${Object.values(
              sessionEnums.SessionTypes
            ).join(', ')}`,
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      reportsCount: {
        type: DataTypes.INTEGER,
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
