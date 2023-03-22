/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const jwt = require('jsonwebtoken');

const tokens = {
  user_1: jwt.sign({ payload: { id: 1 } }, 'secret_1'),
  user_2: jwt.sign({ payload: { id: 2 } }, 'secret_2'),
  user_3: jwt.sign({ payload: { id: 3 } }, 'secret_3'),
};

module.exports = {
  up: async function (queryInterface) {
    await queryInterface.bulkInsert('user_tokens', [
      {
        userId: 1,
        refreshToken: tokens.user_1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        refreshToken: tokens.user_2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        refreshToken: tokens.user_3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async function (queryInterface) {
    await queryInterface.bulkDelete('user_tokens', null, {});
  },
};
