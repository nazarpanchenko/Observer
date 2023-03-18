'use strict';

import { subjectTypes } from '../consts';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    'subjects',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.BIGINT(11),
      },
      reportId: {
        type: Sequelize.BIGINT(11),
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
      magnitude: {
        type: Sequelize.FLOAT(3, 2),
        allowNull: false,
      },
      apparentSize: {
        type: Sequelize.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      semiMajorAxis: {
        type: Sequelize.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      axialTilt: {
        type: Sequelize.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      ecccentricity: {
        type: Sequelize.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      inclination: {
        type: Sequelize.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      rotation: {
        type: Sequelize.FLOAT(3, 2),
        defaultValue: 0.0,
      },
    },
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.dropTable('subjects', { cascade: true });
}
