'use strict';

import { barlowLensSchemas } from '../consts';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    'barlow_lenses',
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
}

export async function down(queryInterface) {
  await queryInterface.dropTable('barlow_lenses', { cascade: true });
}
