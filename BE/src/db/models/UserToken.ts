'use strict';

import { Model } from 'sequelize';

import { userTokenTypes } from '../../shared/types';

interface UserTokenAttributes extends userTokenTypes.UserToken {}

const userTokenModel = (sequelize: any, DataTypes: any) => {
  class UserToken extends Model<UserTokenAttributes> implements UserTokenAttributes {
    id?: number;
    userId?: number;
    refreshToken!: string;

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
        onDelete: 'CASCADE'
      });
    }

    static async getToken(userId: string) {
      const storedToken = await UserToken.findOne({
        where: { userId },
        attributes: ['id'],
      });
      return storedToken;
    }

    static async saveToken(userId: number, refreshToken: string) {
      const createdToken = await UserToken.create({
        userId,
        refreshToken,
      });
      return createdToken;
    }

    static async updateToken(userId: number, refreshToken: string) {
      const updatedToken = await UserToken.update(
        { refreshToken },
        {
          where: { userId },
        }
      );
      return updatedToken;
    }
  }

  UserToken.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserToken',
      tableName: 'user_tokens',
    }
  );

  return UserToken;
};

export default userTokenModel;
