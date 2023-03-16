'use strict';

import { telescopeTypes } from '../consts';

export async function up(queryInterface, Sequelize) {
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
}

export async function down(queryInterface) {
  await queryInterface.dropTable('telescopes', { cascade: true });
}
