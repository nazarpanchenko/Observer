declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

declare module '@mui/material/styles' {
  interface Theme {
    flex: {
      display: {
        flex: string;
        inlineFlex: string;
      };
      flexDirection: {
        row: string;
        column: string;
      };
      justifyContent: {
        spaceBetween: string;
        spaceAround: string;
        center: string;
      };
      alignItems: {
        center: string;
      };
    };
    bg: {
      info: string;
      success: string;
      warning: string;
      danger: string;
    };
    text: {
      color: {
        info: string;
        success: string;
        warning: string;
        danger: string;
      };
    };
  }
  interface ThemeOptions {
    flex?: {
      display: {
        flex: string;
        inlineFlex: string;
      };
      flexDirection?: {
        row?: string;
        column?: string;
      };
      justifyContent?: {
        spaceBetween: string;
        spaceAround: string;
        center: string;
      };
      alignItems?: {
        center: string;
      };
    };
    bg?: {
      info?: string;
      success?: string;
      warning?: string;
      danger?: string;
    };
    text?: {
      info?: string;
      success?: string;
      warning?: string;
      danger?: string;
    };
  }
}
