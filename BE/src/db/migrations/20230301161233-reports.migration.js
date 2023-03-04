'use strict';

const TELESCOPE_MODELS = Object.freeze({
  GSO_DOB_10: 'GSO DOB 10',
  LEVENHUK_SKYLINE_BASE_110S: 'Levenhuk Skyline Base 110S',
});

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      subject: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      telescope: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(TELESCOPE_MODELS)],
            msg: `telescope field's value must be one of the following: ${Object.values(
              TELESCOPE_MODELS
            ).join(', ')}`,
          },
        },
      },
      eyepiece: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      filter: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      magnification: {
        type: Sequelize.STRING(5),
        allowNull: false,
        validate: {
          containsX: () =>
            `magnification field's value must include the character "X"`,
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
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('reports');
  },
};
