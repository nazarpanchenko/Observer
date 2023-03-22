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
          reportsCount: 3,
          sessionRealDurationMin: 25,
          sessionVirtualDurationMin: 25,
          sessionStartDate: new Date('2022-02-12T23:24:00Z'),
          sessionEndDate: new Date('2022-02-12T23:49:00Z'),
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
          userId: 2,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 48,
          sessionVirtualDurationMin: 48,
          sessionStartDate: new Date('2022-03-09T19:10:00Z'),
          sessionEndDate: new Date('2022-03-09T19:58:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          category: sessionCategories.EVENT,
          reportsCount: 3,
          sessionRealDurationMin: 77,
          sessionVirtualDurationMin: 73,
          sessionStartDate: new Date('2022-02-12T23:53:00Z'),
          sessionEndDate: new Date('2022-03-13T01:06:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          category: sessionCategories.REGULAR,
          reportsCount: 3,
          sessionRealDurationMin: 51,
          sessionVirtualDurationMin: 51,
          sessionStartDate: new Date('2022-03-12T01:12:00Z'),
          sessionEndDate: new Date('2022-03-12T02:01:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 27,
          sessionVirtualDurationMin: 27,
          sessionStartDate: new Date('2022-03-01T17:41:00Z'),
          sessionEndDate: new Date('2022-03-01T18:08:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 33,
          sessionVirtualDurationMin: 31,
          sessionStartDate: new Date('2022-03-02T21:18:00Z'),
          sessionEndDate: new Date('2022-03-02T21:51:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          category: sessionCategories.REGULAR,
          reportsCount: 6,
          sessionRealDurationMin: 120,
          sessionVirtualDurationMin: 120,
          sessionStartDate: new Date('2022-03-03T23:00:00Z'),
          sessionEndDate: new Date('2022-03-04T01:00:00Z'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          category: sessionCategories.REGULAR,
          reportsCount: 4,
          sessionRealDurationMin: 31,
          sessionVirtualDurationMin: 31,
          sessionStartDate: new Date('2022-03-02T21:52:00Z'),
          sessionEndDate: new Date('2022-03-02T22:23:00Z'),
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
