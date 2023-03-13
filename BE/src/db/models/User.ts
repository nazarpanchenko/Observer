'use strict';

import { Model } from 'sequelize';

import { userTypes } from '../../types';

interface UserAttributes extends userTypes.UserModel {}

const userModel = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    username!: string;
    email!: string;
    password!: string;
    isVerified?: 1 | 0;
    verificationLink?: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      models.User.hasMany(models.Session);
      models.User.hasMany(models.UserToken);
    }

    static async getUser(email: string) {
      const userData = await User.findOne({
        where: { email },
        attributes: ['id', 'email'],
      });
      return userData;
    }

    static async signup(params: userTypes.CreateUser) {
      const userData = await User.create(params);
      return userData;
    }

    static async signin() {}

    static async logout() {}

    static async verifyUser() {}
  }

  User.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      isVerified: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      verificationLink: {
        type: DataTypes.STRING,
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
