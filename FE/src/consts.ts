import { ThemeOptions } from '@mui/material';

const pallette = {
  main: '#88DEFF',
  secondary: '#519AA3',
  info: '#3639CB',
  success: '#36CB39',
  warning: '#eb9943',
  error: '#ad1414',
};

const themeOverrides: ThemeOptions = {
  components: {
    MuiGrid: {
      styleOverrides: {
        container: {
          justifyContent: 'center',
          padding: '30px 0',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          marginBottom: 30,
          textAlign: 'center',
          color: '#fff',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'block',
          marginBottom: 10,
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: 0,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: pallette.info,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          width: 100,
          marginBottom: 20,
        },
        outlined: {
          width: 100,
          marginBottom: 20,
        },
      },
    },
  },
};

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

export const theme: ThemeOptions = {
  ...themeOverrides,
  bg: pallette,
  text: {
    color: pallette,
    font: {
      weight: {
        extra_light: 100,
        light: 300,
        normal: 500,
        bold: 700,
        extra_bold: 900,
      },
      style: {
        italic: 'italic',
        oblique: 'oblique 40deg',
      },
    },
  },
};
