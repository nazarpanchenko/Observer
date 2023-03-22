/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { filterTypes } = require('../consts');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'filters',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT(11),
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
  },

  down: async function (queryInterface) {
    await queryInterface.dropTable('filters', { cascade: true });
  },
};
