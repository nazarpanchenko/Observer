'use strict';

const { sessionCategories } = require('../consts');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'sessions',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
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
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        reportsCount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sessions', { cascade: true });
  },
};
