'use strict';

const { eyepieceOpticalSchemas, eyepieceSizeSchemas } = require('../consts');

const containsChar = (field, char) =>
  `${field} field's value must include the character "${char}"`;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'eyepieces',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        reportId: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
  },

  async down(queryInterface) {
    await queryInterface.dropTable('eyepieces', { cascade: true });
  },
};
