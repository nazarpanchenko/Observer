'use strict';

import { telescopeTypes } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'reports',
    [
      {
        sessionId: 1,
        subject: 'Moon',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '83X',
        observationRealDurationMin: 25,
        observationVirtualDurationMin: 25,
        observationStartDate: new Date('2022-02-12T23:24:00Z'),
        observationEndDate: new Date('2022-02-12T23:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 8,
        subject: 'Jupiter',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '139X',
        observationRealDurationMin: 74,
        observationVirtualDurationMin: 74,
        observationStartDate: new Date('2022-03-09T17:49:00Z'),
        observationEndDate: new Date('2022-03-09T19:03:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 8,
        subject: 'Saturn',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '198',
        observationRealDurationMin: 48,
        observationVirtualDurationMin: 48,
        observationStartDate: new Date('2022-03-09T19:10:00Z'),
        observationEndDate: new Date('2022-03-09T19:58:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 1,
        subject: 'Moon',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '250X',
        observationRealDurationMin: 77,
        observationVirtualDurationMin: 73,
        observationStartDate: new Date('2022-02-12T23:53:00Z'),
        observationEndDate: new Date('2022-03-13T01:06:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 1,
        subject: 'M44',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 51,
        observationVirtualDurationMin: 51,
        observationStartDate: new Date('2022-03-12T01:12:00Z'),
        observationEndDate: new Date('2022-03-12T02:01:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 5,
        subject: 'Saturn',
        telescopeType: telescopeTypes.CASSEGRAIN,
        magnification: '220X',
        observationRealDurationMin: 27,
        observationVirtualDurationMin: 27,
        observationStartDate: new Date('2022-03-01T17:41:00Z'),
        observationEndDate: new Date('2022-03-01T18:08:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 8,
        subject: 'M44',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '139X',
        observationRealDurationMin: 33,
        observationVirtualDurationMin: 31,
        observationStartDate: new Date('2022-03-02T21:18:00Z'),
        observationEndDate: new Date('2022-03-02T21:51:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 9,
        subject: 'Moon',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '312X',
        observationRealDurationMin: 120,
        observationVirtualDurationMin: 120,
        observationStartDate: new Date('2022-03-03T23:00:00Z'),
        observationEndDate: new Date('2022-03-04T01:00:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 8,
        subject: 'M44',
        telescopeType: telescopeTypes.CASSEGRAIN,
        magnification: '41X',
        observationRealDurationMin: 31,
        observationVirtualDurationMin: 31,
        observationStartDate: new Date('2022-03-02T21:52:00Z'),
        observationEndDate: new Date('2022-03-02T22:23:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 5,
        subject: 'Saturn',
        telescopeType: telescopeTypes.CASSEGRAIN,
        magnification: '160X',
        observationRealDurationMin: 47,
        observationVirtualDurationMin: 39,
        observationStartDate: new Date('2022-03-01T18:11:00Z'),
        observationEndDate: new Date('2022-03-01T18:58:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 3,
        subject: 'M42',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '225X',
        observationRealDurationMin: 80,
        observationVirtualDurationMin: 69,
        observationStartDate: new Date('2022-02-16T20:00:00Z'),
        observationEndDate: new Date('2022-02-16T21:20:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 9,
        subject: 'M44',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 45,
        observationVirtualDurationMin: 43,
        observationStartDate: new Date('2022-03-12T17:59:00Z'),
        observationEndDate: new Date('2022-03-12T18:44:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 9,
        subject: 'Saturn',
        telescopeType: telescopeTypes.CASSEGRAIN,
        magnification: '280X',
        observationRealDurationMin: 90,
        observationVirtualDurationMin: 90,
        observationStartDate: new Date('2022-03-12T22:00:00Z'),
        observationEndDate: new Date('2022-03-12T23:30:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 9,
        subject: 'M51',
        telescopeType: telescopeTypes.CASSEGRAIN,
        magnification: '143X',
        observationRealDurationMin: 120,
        observationVirtualDurationMin: 120,
        observationStartDate: new Date('2022-03-12T01:00:00Z'),
        observationEndDate: new Date('2022-03-12T02:30:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 9,
        subject: 'NGC 469',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 13,
        observationVirtualDurationMin: 13,
        observationStartDate: new Date('2022-03-12T17:36:00Z'),
        observationEndDate: new Date('2022-03-12T17:49:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 2,
        subject: 'Giades Open Cluster',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 37,
        observationVirtualDurationMin: 37,
        observationStartDate: new Date('2022-02-15T04:02:00Z'),
        observationEndDate: new Date('2022-02-15T04:39:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 2,
        subject: 'M42',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '83X',
        observationRealDurationMin: 32,
        observationVirtualDurationMin: 32,
        observationStartDate: new Date('2022-02-15T00:09:00Z'),
        observationEndDate: new Date('2022-02-15T00:41:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 4,
        subject: 'Caldwell 14',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '83X',
        observationRealDurationMin: 180,
        observationVirtualDurationMin: 180,
        observationStartDate: new Date('2022-12-23T02:00:00Z'),
        observationEndDate: new Date('2022-12-23T05:00:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 2,
        subject: 'Giades Open Cluster',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '83X',
        observationRealDurationMin: 63,
        observationVirtualDurationMin: 54,
        observationStartDate: new Date('2022-02-18T01:58:00Z'),
        observationEndDate: new Date('2022-02-18T03:01:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 9,
        subject: 'Caldwell 14',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 28,
        observationVirtualDurationMin: 28,
        observationStartDate: new Date('2022-03-12T05:14:00Z'),
        observationEndDate: new Date('2022-03-12T05:42:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 2,
        subject: 'Caldwell 14',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 34,
        observationVirtualDurationMin: 33,
        observationStartDate: new Date('2022-02-18T03:04:00Z'),
        observationEndDate: new Date('2022-02-18T03:38:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 6,
        subject: 'M33',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '83X',
        observationRealDurationMin: 41,
        observationVirtualDurationMin: 41,
        observationStartDate: new Date('2022-02-12T19:02:00Z'),
        observationEndDate: new Date('2022-02-12T019:43:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 7,
        subject: 'Caldwell 14',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '41X',
        observationRealDurationMin: 34,
        observationVirtualDurationMin: 33,
        observationStartDate: new Date('2022-03-13T03:04:00Z'),
        observationEndDate: new Date('2022-03-13T03:38:00Z'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        sessionId: 6,
        subject: 'M33',
        telescopeType: telescopeTypes.REFLECTOR,
        magnification: '139X',
        observationRealDurationMin: 32,
        observationVirtualDurationMin: 32,
        observationStartDate: new Date('2022-02-12T19:49:00Z'),
        observationEndDate: new Date('2022-02-12T20:21:00Z'),
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
  await queryInterface.bulkDelete('reports', null, {});
}
