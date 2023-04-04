'use strict';

import { Model } from 'sequelize';

import { TelescopeTypes } from '../../shared/enums';
import { TelescopeData } from '../../shared/types';
import { containsChar } from '../validators';

const telescopeModel = (sequelize: any, DataTypes: any) => {
  class Telescope extends Model<TelescopeData> implements TelescopeData {
    id!: number;
    type!: TelescopeTypes;
    model!: string;
    diameterMm!: number;
    lightForce!: string;
    resolution!: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Report, {
        foreignKey: {
          name: 'reportId',
          allowNull: false,
        },
      });
    }
  }

  Telescope.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(TelescopeTypes)],
            msg: `telescopeType field's value must be one of the following: ${Object.values(
              TelescopeTypes
            ).join(', ')}`,
          },
        },
      },
      model: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      diameterMm: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lightForce: {
        type: DataTypes.STRING(3),
        allowNull: false,
        validate: {
          containsChar: (char: string) => containsChar('lightForce', char, ['F']),
        },
      },
      resolution: {
        type: DataTypes.FLOAT(3, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Telescope',
      tableName: 'telescopes',
    }
  );

  return Telescope;
};

export default telescopeModel;
