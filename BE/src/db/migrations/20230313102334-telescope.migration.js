/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { telescopeTypes } = require('../consts');
const { containsChar } = require('../validators');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'telescopes',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT(11),
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isIn: {
              args: [Object.values(telescopeTypes)],
              msg: `telescopeType field's value must be one of the following: ${Object.values(
                telescopeTypes
              ).join(', ')}`,
            },
          },
        },
        model: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        diameterMm: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        lightForce: {
          type: Sequelize.STRING(3),
          allowNull: false,
          validate: {
            containsChar: (char) => containsChar('lightForce', char, 'F'),
          },
        },
        resolution: {
          type: Sequelize.FLOAT(3, 2),
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  },
  down: async function (queryInterface) {
    await queryInterface.dropTable('telescopes', { cascade: true });
  },
};
