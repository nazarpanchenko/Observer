'use strict';

import { Model } from 'sequelize';

import { filterEnums } from '../../enums';
import { filterTypes } from '../../types';

interface FilterAttributes extends filterTypes.FilterData {}

const filterModel = (sequelize: any, DataTypes: any) => {
  class Filter extends Model<FilterAttributes> implements FilterAttributes {
    id?: number;
    reportId!: number;
    eyepieceId!: number;
    filter?: string;
    filterType?: filterEnums.FilterTypes;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      models.BarlowLens.belongsTo(models.Report, {
        foreignKey: 'reportId',
      });
    }
  }

  Filter.init(
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
      filterType: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [Object.values(filterEnums.FilterTypes)],
            msg: `filterType field's value must be one of the following: ${Object.values(
              filterEnums.FilterTypes
            ).join(', ')}`,
          },
        },
        defaultValue: '',
      },
      filter: {
        type: DataTypes.STRING(50),
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'Filter',
      tableName: 'filters',
    }
  );

  return Filter;
};

export default filterModel;
