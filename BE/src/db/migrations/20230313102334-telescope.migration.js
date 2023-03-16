'use strict';

const { telescopeTypes } = require('../consts');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'telescopes',
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

  async down(queryInterface) {
    await queryInterface.dropTable('telescopes', { cascade: true });
  },
};
