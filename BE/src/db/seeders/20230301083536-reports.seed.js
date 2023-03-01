'use strict';

const { TELESCOPE_TYPE } = require('../../constants');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'reports',
      [
        {
          subject: 'Mars',
          telescope: TELESCOPE_TYPE.DOB_10,
          eyepiece: '25mm Plossl',
          magnification: '50X',
          observationRealDurationMin: 60,
          observationVirtualDurationMin: 120,
          observationStartDate: new Date('2022-02-25T19:30:00Z'),
          observationEndDate: new Date('2022-02-25T20:30:00Z'),
        },
        {
          subject: 'Orion Nebula',
          telescope: TELESCOPE_TYPE.LEVENHUK_SKYLINE_BASE_110S,
          eyepiece: '20mm Kellner',
          magnification: '28X',
          observationRealDurationMin: 45,
          observationVirtualDurationMin: 90,
          observationStartDate: new Date('2022-02-28T21:00:00Z'),
          observationEndDate: new Date('2022-02-28T21:45:00Z'),
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
