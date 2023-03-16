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
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'User',
            key: 'id',
          },
          onDelete: 'CASCADE',
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
          allowNull: false,
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

  async down(queryInterface) {
    await queryInterface.dropTable('sessions', { cascade: true });
  },
};
