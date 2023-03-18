'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    'user_tokens',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.BIGINT(11),
      },
      userId: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      refreshToken: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.dropTable('user_tokens', null);
}
