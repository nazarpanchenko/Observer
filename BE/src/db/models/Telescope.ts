'use strict';

import { Model } from 'sequelize';

import { TelescopeTypes } from '../../shared/enums';
import { TelescopeData } from '../../shared/types';

const telescopeModel = (sequelize: any, DataTypes: any) => {
  class Telescope extends Model<TelescopeData> implements TelescopeData {
    id?: number;
    telescopeType!: TelescopeTypes;
    telescopeModel!: string;
    telescopeDiameterMm!: number;

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
        onDelete: 'CASCADE',
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
      telescopeType: {
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
      telescopeModel: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      telescopeDiameterMm: {
        type: DataTypes.INTEGER,
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
