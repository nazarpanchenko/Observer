/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { containsChar } = require('../validators');
const {
  eyepieceOpticalSchemas,
  eyepieceSizeSchemas,
} = require('../consts');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'eyepieces',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT(11),
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
            containsChar: char => containsChar('eyepieceFocus', char, 'mm'),
          },
        },
        eyepieceFieldRange: {
          type: Sequelize.STRING(6),
          allowNull: false,
          validate: {
            containsChar: char => containsChar('eyepieceFieldRange', char, "'"),
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
            containsChar: char => containsChar('eyepiecePupilScrew', char, 'mm'),
          },
        },
      },
      {
        timestamps: true,
      }
    );
  },

  down: async function (queryInterface) {
    await queryInterface.dropTable('eyepieces', { cascade: true });
  },
};
