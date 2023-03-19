declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

declare module '@mui/material/styles' {
  interface ThemeColors {
    main: string;
    secondary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
  }
  interface Theme {
    bg: ThemeColors;
    text: {
      color: ThemeColors;
      font: {
        weight: {
          extra_light: number;
          light: number;
          normal: number;
          bold: number;
          extra_bold: number;
        };
        style: {
          italic: string;
          oblique: string;
        };
      };
    };
  }
  interface ThemeOptions {
    bg?: ThemeColors;
    text?: {
      color?: ThemeColors;
      font?: {
        weight?: {
          extra_light?: number;
          light?: number;
          normal?: number;
          bold?: number;
          extra_bold?: number;
        };
        style?: {
          italic?: string;
          oblique?: string;
        };
      };
    };
  }
}

export {};
