'use strict';

import { Model } from 'sequelize';

import { userTokenTypes } from '../../shared/types';

type UserTokenAttributes = userTokenTypes.UserToken;

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
        onDelete: 'CASCADE',
      });
    }

    static async getToken(userId: string): Promise<userTokenTypes.UserToken | null> {
      const storedToken: userTokenTypes.UserToken | null = await UserToken.findOne({
        where: { userId },
        attributes: ['id'],
      });
      return storedToken;
    }

    static async saveToken(
      userId: number,
      refreshToken: string
    ): Promise<userTokenTypes.UserToken> {
      const createdToken: userTokenTypes.UserToken = await UserToken.create({
        userId,
        refreshToken,
      });
      return createdToken;
    }

    static async updateToken(
      userId: number,
      refreshToken: string
    ): Promise<userTokenTypes.UserToken> {
      const [affectedCount, affectedRows]: userTokenTypes.UserTokenTuple =
        await UserToken.update(
          { refreshToken },
          {
            where: { userId },
            returning: true,
          }
        );
      return { ...affectedRows[0] };
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
