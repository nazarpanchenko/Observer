'use strict';

const { filterTypes } = require('../consts');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'filters',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        reportId: {
          type: Sequelize.INTEGER,
          allowNull: false,
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

  async down(queryInterface) {
    await queryInterface.dropTable('filters', { cascade: true });
  },
};
