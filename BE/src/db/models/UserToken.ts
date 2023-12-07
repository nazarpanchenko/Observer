'use strict';

import { Model } from 'sequelize';

import { UserTokenData, ModifiedUserToken } from '../../shared';

const userTokenModel = (sequelize: any, DataTypes: any) => {
  class UserToken extends Model<UserTokenData> implements UserTokenData {
    id!: number;
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
      });
    }

    static async getOne(id: number): Promise<UserTokenData | null> {
      const storedToken: UserTokenData | null = await UserToken.findOne({
        where: { id },
        attributes: ['id'],
      });
      return storedToken;
    }

    static async save(id: number, refreshToken: string): Promise<UserTokenData> {
      const createdToken: UserTokenData = await UserToken.create({
        id,
        refreshToken,
      });
      return createdToken;
    }

    static async updateToken(id: number, refreshToken: string): Promise<UserTokenData> {
      const updatedToken: ModifiedUserToken = await UserToken.update(
        { refreshToken },
        {
          where: { id },
          returning: true,
        }
      );
      return { ...updatedToken[1][0] } as UserTokenData;
    }

    // 'void' return type is used since destroy() method does not support 'returning: true' option
    static async deleteToken(refreshToken: string): Promise<void> {
      await UserToken.destroy({
        where: { refreshToken },
      });
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
