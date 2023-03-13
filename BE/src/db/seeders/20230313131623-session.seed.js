'use strict';

const { sessionCategories } = require('../consts');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'sessions',
      [
        {
          userId: 1,
          category: sessionCategories.REGULAR,
          userName: 'test',
          reportsCount: 3,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          userId: 2,
          category: sessionCategories.REGULAR,
          userName: 'test2',
          reportsCount: 4,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          userId: 2,
          category: sessionCategories.EVENT,
          userName: 'test2',
          reportsCount: 3,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          userId: 1,
          category: sessionCategories.REGULAR,
          userName: 'test',
          reportsCount: 1,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
      ],
      {
        timestamps: true,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('sessions', null, {});
  },
};
