'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'test',
        email: 'test@gmail.com',
        password: 'Abcde$12345',
        createdAt: new Date('2022-12-15T05:00:00Z'),
        updatedAt: new Date('2022-12-15T05:00:00Z'),
      },
      {
        username: 'test2',
        email: 'test2@gmail.com',
        password: 'Abcde$12345',
        createdAt: new Date('2022-12-15T05:00:00Z'),
        updatedAt: new Date('2022-12-15T05:00:00Z'),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
