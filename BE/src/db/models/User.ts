'use strict';

import { Model } from 'sequelize';

import { userTypes } from '../../shared/types';

type UserAttributes = userTypes.UserData;

const userModel = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    firstName!: string;
    lastName!: string;
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
      this.hasMany(models.UserToken, {
        foreignKey: {
          field: 'userId',
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Session, {
        foreignKey: {
          field: 'sessionId',
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
    }

    static async getUser(
      field: string,
      value: string
    ): Promise<userTypes.UserData | null> {
      const userData: userTypes.UserData | null = await User.findOne({
        where: { [field]: value },
        attributes: ['id', 'email'],
      });
      return userData;
    }

    static async signup(params: userTypes.CreateUser): Promise<userTypes.UserData> {
      const userData: userTypes.UserData = await User.create(params);
      return userData;
    }

    static async signin() {
      return {};
    }

    static async logout() {
      return {};
    }

    static async verifyUser() {
      return {};
    }
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
      isVerified: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
      },
      verificationLink: {
        type: DataTypes.TEXT,
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
