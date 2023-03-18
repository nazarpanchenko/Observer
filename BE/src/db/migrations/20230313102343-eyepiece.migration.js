'use strict';

import { eyepieceOpticalSchemas, eyepieceSizeSchemas } from '../consts';

const containsChar = (field, char) =>
  `${field} field's value must include the character "${char}"`;

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    'eyepieces',
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
      eyepieceManufacturer: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      eyepieceModel: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      eyepieceSizeSchema: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(eyepieceSizeSchemas)],
            msg: `eyepieceSizeSchema field's value must be one of the following: ${Object.values(
              eyepieceSizeSchemas
            ).join(', ')}`,
          },
        },
      },
      eyepieceFocus: {
        type: Sequelize.STRING(5),
        allowNull: false,
        validate: {
          containsChar: containsChar('eyepieceFocus', 'mm'),
        },
      },
      eyepieceFieldRange: {
        type: Sequelize.STRING(6),
        allowNull: false,
        validate: {
          containsChar: containsChar('eyepieceFieldRange', `'`),
        },
      },
      eyepieceOpticalSchema: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(eyepieceOpticalSchemas)],
            msg: `eyepieceOpticalSchema field's value must be one of the following: ${Object.values(
              eyepieceOpticalSchemas
            ).join(', ')}`,
          },
        },
      },
      eyepiecePupilScrew: {
        type: Sequelize.STRING(6),
        allowNull: false,
        validate: {
          containsChar: containsChar('eyepiecePupilScrew', 'mm'),
        },
      },
    },
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.dropTable('eyepieces', { cascade: true });
}
