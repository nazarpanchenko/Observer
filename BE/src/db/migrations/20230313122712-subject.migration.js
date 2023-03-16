'use strict';

const { subjectTypes } = require('../consts');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'subjects',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        reportId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Report',
            key: 'id',
          },
          onDelete: 'CASCADE',
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
      },
      {
        timestamps: true,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('subjects', { cascade: true });
  },
};
