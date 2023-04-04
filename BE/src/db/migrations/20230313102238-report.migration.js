/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { containsChar } = require('../validators');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'reports',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT(11),
        },
        subject: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        telescopeModel: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        magnification: {
          type: Sequelize.STRING(5),
          allowNull: false,
          validate: {
            containsChar: char => containsChar('magnification', char, ['X']),
          },
        },
        observationRealDurationMin: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        observationVirtualDurationMin: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        observationStartDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        observationEndDate: {
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
    await queryInterface.dropTable('reports', null);
  },
};
