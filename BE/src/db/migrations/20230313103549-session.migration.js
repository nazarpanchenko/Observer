/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { sessionCategories } = require('../consts');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sessions',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT(11),
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isIn: {
              args: [Object.values(sessionCategories)],
              msg: `category field's value must be one of the following: ${Object.values(
                sessionCategories
              ).join(', ')}`,
            },
          },
        },
        reportsCount: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        sessionRealDurationMin: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sessionVirtualDurationMin: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sessionStartDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        sessionEndDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  },

  down: async function (queryInterface) {
    await queryInterface.dropTable('sessions', { cascade: true });
  },
};
