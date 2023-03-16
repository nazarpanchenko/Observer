'use strict';

import { Model } from 'sequelize';

import { barlowLensEnums } from '../../shared/enums';
import { barlowLensTypes } from '../../shared/types';

type BarlowLensAttributes = barlowLensTypes.BarlowLensData;

const barlowLensModel = (sequelize: any, DataTypes: any) => {
  class BarlowLens extends Model<BarlowLensAttributes> implements BarlowLensAttributes {
    id?: number;
    barlowLensManufacturer?: string;
    barlowLensSchema?: barlowLensTypes.BarlowLensSchema;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Report, {
        foreignKey: {
          field: 'reportId',
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
        type: DataTypes.INTEGER,
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
