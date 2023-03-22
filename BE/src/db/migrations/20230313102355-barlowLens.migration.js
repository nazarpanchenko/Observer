/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { barlowLensSchemas } = require('../consts');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'barlow_lenses',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT(11),
        },
        barlowLensSchema: {
          type: Sequelize.STRING,
          validate: {
            isIn: {
              args: [Object.values(barlowLensSchemas)],
              msg: `barlowLensSchema field's value must be one of the following: ${Object.values(
                barlowLensSchemas
              ).join(', ')}`,
            },
          },
          defaultValue: '',
        },
        barlowLensManufacturer: {
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
    await queryInterface.dropTable('barlow_lenses', { cascade: true });
  },
};
