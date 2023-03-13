'use strict';

const { telescopeTypes } = require('../consts');

const containsChar = (field, char) =>
  `${field} field's value must include the character "${char}"`;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'reports',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        sessionId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        subject: {
          type: Sequelize.STRING(50),
          allowNull: false,
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
        magnification: {
          type: Sequelize.STRING(5),
          allowNull: false,
          validate: {
            containsChar: containsChar('magnification', 'X'),
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

  async down(queryInterface) {
    await queryInterface.dropTable('reports', null);
  },
};
