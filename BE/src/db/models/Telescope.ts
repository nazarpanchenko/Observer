'use strict';

import { Model } from 'sequelize';

import { telescopeEnums } from '../../enums';
import { telescopeTypes } from '../../types';

interface TelescopeAttributes extends telescopeTypes.TelescopeData {}

const telescopeModel = (sequelize: any, DataTypes: any) => {
  class Telescope extends Model<TelescopeAttributes> implements TelescopeAttributes {
    id?: number;
    reportId!: number;
    telescopeType!: telescopeEnums.TelescopeTypes;
    telescopeModel!: string;
    telescopeDiameterMm!: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      models.Telescope.belongsTo(models.Report);
    }
  }

  Telescope.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      reportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      telescopeType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(telescopeEnums.TelescopeTypes)],
            msg: `telescopeType field's value must be one of the following: ${Object.values(
              telescopeEnums.TelescopeTypes
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
