'use strict';

module.exports = {
  up: async function (queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'TestUser_1',
        lastName: 'Test_1',
        email: 'test.user.1@gmail.com',
        password: 'A$bcd123x_Y_z',
        isVerified: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'TestUser_2',
        lastName: 'Test_2',
        email: 'test.user.2@gmail.com',
        password: 'B$bcd123x_Y_z',
        isVerified: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'TestUser_3',
        lastName: 'Test_3',
        email: 'test.user.3@gmail.com',
        password: 'C$bcd123x_Y_z',
        isVerified: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async function (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
