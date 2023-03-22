export const API_PREFIX = '/api/v1';

export const API_URI =
  `${process.env.API_BASE_URI}/${API_PREFIX}` || `http://localhost:9000/${API_PREFIX}`;

export const PAGINATION_CONFIG = Object.freeze({
  DEFAULT_OFFSET: 0,
  LIMIT: {
    min: 5,
    avg: 10,
    max: 15,
  },
});
