'use strict';

import { Model } from 'sequelize';

import { barlowLensEnums } from '../../enums';
import { barlowLensTypes } from '../../types';

interface BarlowLensAttributes extends barlowLensTypes.BarlowLensData {}

const barlowLensModel = (sequelize: any, DataTypes: any) => {
  class BarlowLens extends Model<BarlowLensAttributes> implements BarlowLensAttributes {
    id?: number;
    reportId!: number;
    eyepieceId!: number;
    barlowLensManufacturer?: string;
    barlowLensSchema?: barlowLensTypes.BarlowLensSchema;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Report, {
        foreignKey: 'reportId',
      });
    }
  }

  BarlowLens.init(
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
      barlowLensSchema: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [Object.values(barlowLensEnums.BarlowLensSchemas)],
            msg: `barlowLensSchema field's value must be one of the following: ${Object.values(
              barlowLensEnums.BarlowLensSchemas
            ).join(', ')}`,
          },
        },
        defaultValue: '',
      },
      barlowLensManufacturer: {
        type: DataTypes.STRING(50),
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'BarlowLens',
      tableName: 'barlow_lenses',
    }
  );

  return BarlowLens;
};

export default barlowLensModel;
