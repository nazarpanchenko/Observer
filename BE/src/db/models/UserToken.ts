'use strict';

import { Model } from 'sequelize';

import { UserTokenData, UserTokenTuple } from '../../shared/types';

const userTokenModel = (sequelize: any, DataTypes: any) => {
  class UserToken extends Model<UserTokenData> implements UserTokenData {
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
          name: 'userId',
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
    }

    static async getToken(userId: string): Promise<UserTokenData | null> {
      const storedToken: UserTokenData | null = await UserToken.findOne({
        where: { userId },
        attributes: ['id'],
      });
      return storedToken;
    }

    static async saveToken(
      userId: number,
      refreshToken: string
    ): Promise<UserTokenData> {      
      const createdToken: UserTokenData = await UserToken.create({
        userId,
        refreshToken,
      });
      return createdToken;
    }

    static async updateToken(
      userId: number,
      refreshToken: string
    ): Promise<UserTokenData> {
      const [affectedCount, affectedRows]: UserTokenTuple =
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
        type: DataTypes.BIGINT(11),
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
