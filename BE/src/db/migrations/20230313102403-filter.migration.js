'use strict';

import { filterTypes } from '../consts';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    'filters',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.BIGINT(11),
      },
      reportId: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        references: {
          model: 'Report',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      filterType: {
        type: Sequelize.STRING,
        validate: {
          isIn: {
            args: [Object.values(filterTypes)],
            msg: `filterType field's value must be one of the following: ${Object.values(
              filterTypes
            ).join(', ')}`,
          },
        },
        defaultValue: '',
      },
      filter: {
        type: Sequelize.STRING(50),
        defaultValue: '',
      },
    },
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.dropTable('filters', { cascade: true });
}
