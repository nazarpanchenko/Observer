export const BASE_URI =
  process.env.REACT_APP_BASE_URI + '/api/v1' || 'http://localhost:9000/api/v1';

export const accessToken = localStorage.getItem('accessToken');

export const PAGINATION_CONFIG = Object.freeze({
  DEFAULT_OFFSET: 0,
  LIMIT: {
    min: 3,
    avg: 4,
    max: 5,
  },
});

export const theme = {
  flex: {
    display: {
      flex: 'flex',
      inlineFlex: 'inline-flex',
    },
    flexDirection: {
      row: 'row',
      column: 'column',
    },
    justifyContent: {
      spaceBetween: 'space-between',
      spaceAround: 'space-around',
      center: 'center',
    },
    alignItems: {
      center: 'center',
    },
  },
  bg: {
    info: '#107baf',
    success: '#addfa2',
    warning: '#eb9943',
    danger: '#ad1414',
  },
  text: {
    color: {
      info: '#107baf',
      success: '#addfa2',
      warning: '#eb9943',
      danger: '#ad1414',
    },
  },
};
