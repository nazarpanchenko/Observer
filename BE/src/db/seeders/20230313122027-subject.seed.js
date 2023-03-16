'use strict';

const { subjectTypes } = require('../consts');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'subjects',
      [
        {
          reportId: 1,
          category: subjectTypes.MOON,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 2,
          category: subjectTypes.PLANET,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 3,
          category: subjectTypes.PLANET,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 4,
          category: subjectTypes.MOON,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 5,
          category: subjectTypes.PLANET,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 6,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 7,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 8,
          category: subjectTypes.MOON,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 9,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 10,
          category: subjectTypes.PLANET,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 11,
          category: subjectTypes.NEBULA,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 12,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 13,
          category: subjectTypes.PLANET,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 14,
          category: subjectTypes.GALAXY,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 15,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 16,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 17,
          category: subjectTypes.NEBULA,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 18,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 19,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 20,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          reportId: 21,
          category: subjectTypes.OPEN_STAR_CLUSTER,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
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
