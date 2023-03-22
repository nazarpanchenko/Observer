'use strict';

import { Model } from 'sequelize';

import { BarlowLensSchemas } from '../../shared/enums';
import { BarlowLensSchema, BarlowLensData } from '../../shared/types';

const barlowLensModel = (sequelize: any, DataTypes: any) => {
  class BarlowLens extends Model<BarlowLensData> implements BarlowLensData {
    id?: number;
    barlowLensManufacturer?: string;
    barlowLensSchema?: BarlowLensSchema;

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

  BarlowLens.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      barlowLensSchema: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [Object.values(BarlowLensSchemas)],
            msg: `barlowLensSchema field's value must be one of the following: ${Object.values(
              BarlowLensSchemas
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
