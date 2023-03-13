'use strict';

const { subjectTypes } = require('../consts');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'subjects',
      [
        {
          reportId: 1,
          category: subjectTypes.GALAXY,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 1,
          category: subjectTypes.GALAXY,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 1,
          category: subjectTypes.GALAXY,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 1,
          category: subjectTypes.NEBULA,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 3,
          category: subjectTypes.GLOBULAR_STAR_CLUSTER,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 2,
          category: subjectTypes.COMET,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 2,
          category: subjectTypes.PLANET,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 6,
          category: subjectTypes.COMET,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 5,
          category: subjectTypes.PLANET,
          createdAt: new Date('2022-12-15T05:00:00Z'),
          updatedAt: new Date('2022-12-15T05:00:00Z'),
        },
        {
          reportId: 2,
          category: subjectTypes.MOON,
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
    await queryInterface.bulkDelete('subjects', null, {});
  },
};
