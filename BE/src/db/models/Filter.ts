'use strict';

import { Model } from 'sequelize';

import { filterEnums } from '../../shared/enums';
import { filterTypes } from '../../shared/types';

type FilterAttributes = filterTypes.FilterData

const filterModel = (sequelize: any, DataTypes: any) => {
  class Filter extends Model<FilterAttributes> implements FilterAttributes {
    id?: number;
    filter?: string;
    filterType?: filterEnums.FilterTypes;

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

  Filter.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
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
