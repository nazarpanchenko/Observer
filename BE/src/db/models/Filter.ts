'use strict';

import { Model } from 'sequelize';

import { FilterTypes } from '../../shared/enums';
import { FilterData } from '../../shared/types';

const filterModel = (sequelize: any, DataTypes: any) => {
  class Filter extends Model<FilterData> implements FilterData {
    id?: number;
    filter?: string;
    filterType?: FilterTypes;

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
        type: DataTypes.BIGINT(11),
      },
      filterType: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [Object.values(FilterTypes)],
            msg: `filterType field's value must be one of the following: ${Object.values(
              FilterTypes
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
