'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { sessionCategories } = require('../consts');

module.exports = {
  up: async function up(queryInterface) {
    await queryInterface.bulkInsert(
      'sessions',
      [
        {
          userId: 1,
          category: sessionCategories.EVENT,
          reportsCount: 4,
          sessionRealDurationMin: 25,
          sessionVirtualDurationMin: 25,
          sessionStartDate: new Date('2022-02-12T23:24:00Z'),
          sessionEndDate: new Date('2022-02-12T23:49:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 74,
          sessionVirtualDurationMin: 74,
          sessionStartDate: new Date('2022-03-09T17:49:00Z'),
          sessionEndDate: new Date('2022-03-09T19:03:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 74,
          sessionVirtualDurationMin: 74,
          sessionStartDate: new Date('2022-03-09T17:49:00Z'),
          sessionEndDate: new Date('2022-03-09T19:03:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          category: sessionCategories.EVENT,
          reportsCount: 4,
          sessionRealDurationMin: 74,
          sessionVirtualDurationMin: 74,
          sessionStartDate: new Date('2022-03-09T17:49:00Z'),
          sessionEndDate: new Date('2022-03-09T19:03:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 74,
          sessionVirtualDurationMin: 74,
          sessionStartDate: new Date('2022-03-09T17:49:00Z'),
          sessionEndDate: new Date('2022-03-09T19:03:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 74,
          sessionVirtualDurationMin: 74,
          sessionStartDate: new Date('2022-03-09T17:49:00Z'),
          sessionEndDate: new Date('2022-03-09T19:03:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        timestamps: true,
      }
    );
  },

  down: async function down(queryInterface) {
    await queryInterface.bulkDelete('sessions', null, {});
  },
};
