'use strict';

const TELESCOPE_TYPES = Object.freeze({
  REFLECTOR: 'Reflector',
  REFRACTOR: 'Refractor',
  CATADIOPTRIC: 'Catadioptric',
});

const TELESCOPE_MODELS = Object.freeze({
  GSO_DOB_10: 'GSO DOB 10',
  LEVENHUK_SKYLINE_BASE_110S: 'Levenhuk Skyline Base 110S',
});

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'reports',
      [
        {
          subject: 'Mars',
          telescopeModel: TELESCOPE_MODELS.GSO_DOB_10,
          telescopeType: TELESCOPE_TYPES.REFLECTOR,
          eyepiece: '25mm Plossl',
          magnification: '50X',
          observationRealDurationMin: 60,
          observationVirtualDurationMin: 120,
          observationStartDate: new Date('2022-02-25T19:30:00Z'),
          observationEndDate: new Date('2022-02-25T20:30:00Z'),
        },
        {
          subject: 'Orion Nebula',
          telescopeModel: TELESCOPE_MODELS.LEVENHUK_SKYLINE_BASE_110S,
          telescopeType: TELESCOPE_TYPES.REFLECTOR,
          eyepiece: '20mm Kellner',
          magnification: '28X',
          observationRealDurationMin: 45,
          observationVirtualDurationMin: 90,
          observationStartDate: new Date('2022-02-28T21:00:00Z'),
          observationEndDate: new Date('2022-02-28T21:45:00Z'),
        },
        {
          subject: 'Jupiter',
          telescopeModel: TELESCOPE_MODELS.GSO_DOB_10,
          telescopeType: TELESCOPE_TYPES.REFLECTOR,
          eyepiece: '5mm Arsenal 110 UW',
          magnification: '250X',
          observationRealDurationMin: 101,
          observationVirtualDurationMin: 88,
          observationStartDate: new Date('2022-02-23T20:33:00Z'),
          observationEndDate: new Date('2022-02-23T22:20:00Z'),
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
