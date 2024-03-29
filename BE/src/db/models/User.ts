'use strict';

import { Model } from 'sequelize';

import db from '..';
import { isUserVerified, UserData, CreateUser } from '../../shared';

const userModel = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserData> implements UserData {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    refreshToken!: string;
    isVerified?: isUserVerified;
    verificationLink?: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.hasOne(models.UserToken, {
        foreignKey: {
          name: 'userId',
          allowNull: false,
        },
      });
      this.hasMany(models.Session, {
        foreignKey: {
          name: 'sessionId',
          allowNull: false,
        },
      });
    }

    static async getOne(query: object): Promise<UserData | null> {
      const userData: UserData | null = await User.findOne({
        where: { ...query },
        attributes: ['id'],
        include: db.models.Session,
      });
      return userData;
    }

    static async signup(params: CreateUser): Promise<UserData> {
      const userData: UserData = await User.create(params);
      return userData;
    }

    static async signin() {
      return {};
    }

    static async logout() {
      return {};
    }

    static async verify(link: string): Promise<void> {
      await this.update({
        isVerified: 1,
      }, {
        where: { verificationLink: link },
      });
    }
  }

  User.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isVerified: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
      },
      verificationLink: {
        type: DataTypes.TEXT,
        unique: true,
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    }
  );

  return User;
};

export default userModel;
