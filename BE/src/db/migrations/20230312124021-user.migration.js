'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        isVerified: {
          type: Sequelize.INTEGER(1),
          defaultValue: 0,
        },
        verificationLink: {
          type: Sequelize.TEXT,
          defaultValue: '',
        },
      },
      {
        timestamps: true,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users', { cascade: true });
  },
};
