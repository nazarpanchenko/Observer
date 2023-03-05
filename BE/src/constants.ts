const API_PREFIX = '/api/v1';

const TELESCOPE_TYPES = Object.freeze({
  REFLECTOR: 'Reflector',
  REFRACTOR: 'Refractor',
  CATADIOPTRIC: 'Catadioptric',
});

const TELESCOPE_MODELS = Object.freeze({
  GSO_DOB_10: 'GSO DOB 10',
  LEVENHUK_SKYLINE_BASE_110S: 'Levenhuk Skyline Base 110S',
});

export { API_PREFIX, TELESCOPE_TYPES, TELESCOPE_MODELS };
