'use strict';

import { telescopeTypes } from '../consts';

const containsChar = (field, char) =>
  `${field} field's value must include the character "${char}"`;

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    'reports',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.BIGINT(11),
      },
      sessionId: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        references: {
          model: 'Session',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
}
export async function down(queryInterface) {
  await queryInterface.dropTable('reports', null);
}
