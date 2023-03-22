/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { telescopeTypes } = require('../consts');

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
        telescopeType: {
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
        telescopeModel: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        telescopeDiameterMm: {
          type: Sequelize.INTEGER,
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
