'use strict';

const { telescopeTypes } = require('../consts');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'reports',
      [
        {
          sessionId: 1,
          subject: 'M31',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '126X',
          observationRealDurationMin: 90,
          observationVirtualDurationMin: 90,
          observationStartDate: new Date('2022-02-23T20:00:00Z'),
          observationEndDate: new Date('2022-02-23T21:30:00Z'),
          createdAt: new Date('2022-12-15 20:00:00'),
          updatedAt: new Date('2022-12-15 21:30:00'),
        },
        {
          sessionId: 1,
          subject: 'Jupiter',
          telescopeType: telescopeTypes.REFRACTOR,
          magnification: '126X',
          observationRealDurationMin: 75,
          observationVirtualDurationMin: 75,
          observationStartDate: new Date('2022-02-24T22:00:00Z'),
          observationEndDate: new Date('2022-02-24T23:15:00Z'),
          createdAt: new Date('2022-12-15 022:00:00'),
          updatedAt: new Date('2022-12-15 23:00:00'),
        },
        {
          sessionId: 1,
          subject: 'Saturn',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '144X',
          observationRealDurationMin: 65,
          observationVirtualDurationMin: 65,
          observationStartDate: new Date('2022-03-03T22:47:00Z'),
          observationEndDate: new Date('2022-03-04T00:05:00Z'),
          createdAt: new Date('2022-12-15 22:47:00'),
          updatedAt: new Date('2022-12-15 00:00:00'),
        },
        {
          sessionId: 1,
          subject: 'Jupiter',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '339X',
          observationRealDurationMin: 97,
          observationVirtualDurationMin: 83,
          observationStartDate: new Date('2022-03-05T02:11:00Z'),
          observationEndDate: new Date('2022-03-05T03:48:00Z'),
          createdAt: new Date('2022-12-15 02:11:00'),
          updatedAt: new Date('2022-12-15 03:48:00'),
        },
        {
          sessionId: 2,
          subject: 'M42',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '28X',
          observationRealDurationMin: 78,
          observationVirtualDurationMin: 78,
          observationStartDate: new Date('2022-03-07T00:53:00Z'),
          observationEndDate: new Date('2022-03-07T02:11:00Z'),
          createdAt: new Date('2022-12-15 00:53:00'),
          updatedAt: new Date('2022-12-15 02:11:00'),
        },
        {
          sessionId: 2,
          subject: 'Saturn',
          telescopeType: telescopeTypes.CASSEGRAIN,
          magnification: '60X',
          observationRealDurationMin: 45,
          observationVirtualDurationMin: 39,
          observationStartDate: new Date('2022-03-01T19:45:00Z'),
          observationEndDate: new Date('2022-03-01T20:30:00Z'),
          createdAt: new Date('2022-12-15 19:45:00'),
          updatedAt: new Date('2022-12-15 20:30:00'),
        },
        {
          sessionId: 3,
          subject: 'Jupiter',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '91X',
          observationRealDurationMin: 60,
          observationVirtualDurationMin: 43,
          observationStartDate: new Date('2022-03-02T21:15:00Z'),
          observationEndDate: new Date('2022-03-02T22:15:00Z'),
          createdAt: new Date('2022-12-15 21:15:00'),
          updatedAt: new Date('2022-12-15 22:15:00'),
        },
        {
          sessionId: 3,
          subject: 'Moon',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '63X',
          observationRealDurationMin: 120,
          observationVirtualDurationMin: 120,
          observationStartDate: new Date('2022-03-03T23:00:00Z'),
          observationEndDate: new Date('2022-03-04T01:00:00Z'),
          createdAt: new Date('2022-12-15 23:00:00'),
          updatedAt: new Date('2022-12-15 01:00:00'),
        },
        {
          sessionId: 3,
          subject: 'Saturn',
          telescopeType: telescopeTypes.CASSEGRAIN,
          magnification: '116X',
          observationRealDurationMin: 90,
          observationVirtualDurationMin: 90,
          observationStartDate: new Date('2022-03-05T20:00:00Z'),
          observationEndDate: new Date('2022-03-05T22:00:00Z'),
          createdAt: new Date('2022-12-15 20:00:00'),
          updatedAt: new Date('2022-12-15 22:00:00'),
        },
        {
          sessionId: 3,
          subject: 'Jupiter',
          telescopeType: telescopeTypes.REFRACTOR,
          magnification: '55X',
          observationRealDurationMin: 80,
          observationVirtualDurationMin: 80,
          observationStartDate: new Date('2022-03-06T01:00:00Z'),
          observationEndDate: new Date('2022-03-06T02:30:00Z'),
          createdAt: new Date('2022-12-15 01:00:00'),
          updatedAt: new Date('2022-12-15 02:30:00'),
        },
        {
          sessionId: 3,
          subject: 'M57',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '225X',
          observationRealDurationMin: 80,
          observationVirtualDurationMin: 69,
          observationStartDate: new Date('2022-02-21T20:00:00Z'),
          observationEndDate: new Date('2022-02-21T21:20:00Z'),
          createdAt: new Date('2022-12-15 20:00:00'),
          updatedAt: new Date('2022-12-15 21:20:00'),
        },
        {
          sessionId: 4,
          subject: 'M31',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '42X',
          observationRealDurationMin: 180,
          observationVirtualDurationMin: 180,
          observationStartDate: new Date('2022-02-23T22:00:00Z'),
          observationEndDate: new Date('2022-02-24T01:00:00Z'),
          createdAt: new Date('2022-12-15 22:20:00'),
          updatedAt: new Date('2022-12-15 01:00:00'),
        },
        {
          sessionId: 1,
          subject: 'M31',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '65X',
          observationRealDurationMin: 90,
          observationVirtualDurationMin: 90,
          observationStartDate: new Date('2022-08-15T22:00:00Z'),
          observationEndDate: new Date('2022-08-15T23:30:00Z'),
          createdAt: new Date('2022-12-15 22:00:00'),
          updatedAt: new Date('2022-12-15 23:00:00'),
        },
        {
          sessionId: 2,
          subject: 'M51',
          telescopeType: telescopeTypes.CASSEGRAIN,
          magnification: '143X',
          observationRealDurationMin: 120,
          observationVirtualDurationMin: 120,
          observationStartDate: new Date('2022-05-12T01:00:00Z'),
          observationEndDate: new Date('2022-05-12T02:30:00Z'),
          createdAt: new Date('2022-12-15 01:00:00'),
          updatedAt: new Date('2022-12-15 02:30:00'),
        },
        {
          sessionId: 4,
          subject: 'M42',
          telescopeType: telescopeTypes.REFLECTOR,
          magnification: '95X',
          observationRealDurationMin: 180,
          observationVirtualDurationMin: 180,
          observationStartDate: new Date('2022-12-15T02:00:00Z'),
          observationEndDate: new Date('2022-12-15T05:00:00Z'),
          createdAt: new Date('2022-12-15 02:00:00'),
          updatedAt: new Date('2022-12-15 05:00:00'),
        },
      ],
      {
        timestamps: true,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('reports', null, {});
  },
};
