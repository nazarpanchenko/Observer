'use strict';

import { sessionCategories } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'sessions',
    [
      {
        userId: 1,
        category: sessionCategories.REGULAR,
        reportsCount: 6,
        sessionRealDurationMin: 76,
        sessionVirtualDurationMin: 72,
        sessionStartDate: new Date('2022-02-1201:12:00Z'),
        sessionEndDate: new Date('2022-02-12T02:01:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 3,
        category: sessionCategories.REGULAR,
        reportsCount: 4,
        sessionRealDurationMin: 166,
        sessionVirtualDurationMin: 157,
        sessionStartDate: new Date('2022-02-15T00:09:00'),
        sessionEndDate: new Date('2022-02-16T04:39:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 1,
        category: sessionCategories.EVENT,
        reportsCount: 3,
        sessionRealDurationMin: 153,
        sessionVirtualDurationMin: 147,
        sessionStartDate: new Date('2022-02-12T23:24:00Z'),
        sessionEndDate: new Date('2022-02-12T23:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 1,
        category: sessionCategories.REGULAR,
        reportsCount: 1,
        sessionRealDurationMin: 153,
        sessionVirtualDurationMin: 147,
        sessionStartDate: new Date('2022-02-12T23:24:00Z'),
        sessionEndDate: new Date('2022-02-12T23:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 2,
        category: sessionCategories.REGULAR,
        reportsCount: 1,
        sessionRealDurationMin: 74,
        sessionVirtualDurationMin: 66,
        sessionStartDate: new Date('2022-03-01T17:41:00Z'),
        sessionEndDate: new Date('2022-03-01T23:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 1,
        category: sessionCategories.EVENT,
        reportsCount: 1,
        sessionRealDurationMin: 153,
        sessionVirtualDurationMin: 147,
        sessionStartDate: new Date('2022-02-12T23:24:00Z'),
        sessionEndDate: new Date('2022-02-12T23:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 3,
        category: sessionCategories.REGULAR,
        reportsCount: 1,
        sessionRealDurationMin: 153,
        sessionVirtualDurationMin: 147,
        sessionStartDate: new Date('2022-02-12T23:24:00Z'),
        sessionEndDate: new Date('2022-02-12T23:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 2,
        category: sessionCategories.REGULAR,
        reportsCount: 1,
        sessionRealDurationMin: 234,
        sessionVirtualDurationMin: 232,
        sessionStartDate: new Date('2022-03-09T17:49:00Z'),
        sessionEndDate: new Date('2022-03-09T01:00:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 2,
        category: sessionCategories.EVENT,
        reportsCount: 1,
        sessionRealDurationMin: 616,
        sessionVirtualDurationMin: 613,
        sessionStartDate: new Date('2022-03-12T17:36:00'),
        sessionEndDate: new Date('2022-03-12T23:30:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('sessions', null, {});
}
