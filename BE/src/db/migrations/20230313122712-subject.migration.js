/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { subjectTypes } = require('../consts');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'subjects',
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
              args: [subjectTypes],
              msg: `category field's value must be one of the following: ${Object.values(
                subjectTypes
              ).join(', ')}`,
            },
          },
        },
        magnitude: {
          type: Sequelize.FLOAT(4, 2),
          allowNull: false,
        },
        apparentSize: {
          type: Sequelize.FLOAT(4, 2),
          defaultValue: 0.00,
        },
        semiMajorAxis: {
          type: Sequelize.FLOAT(3, 2),
          defaultValue: 0.00,
        },
        axialTilt: {
          type: Sequelize.FLOAT(3, 2),
          defaultValue: 0.00,
        },
        ecccentricity: {
          type: Sequelize.FLOAT(3, 2),
          defaultValue: 0.00,
        },
        orbitalInclination: {
          type: Sequelize.FLOAT(3, 2),
          defaultValue: 0.00,
        },
        rotation: {
          type: Sequelize.FLOAT(3, 2),
          defaultValue: 0.00,
        },
      },
      {
        timestamps: true,
      }
    );
  },

  down: async function (queryInterface) {
    await queryInterface.dropTable('subjects', { cascade: true });
  },
};
