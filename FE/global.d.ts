declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.otf';
declare module '*.ttf';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '@mui/material/styles' {
  interface Theme {
    flexOptions: {
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
    bgOptions: {
      info: string;
      success: string;
      warning: string;
      danger: string;
    };
    textOptions: {
      color: {
        info: string;
        success: string;
        warning: string;
        danger: string;
      };
    };
  }
  interface ThemeOptions {
    flexOptions?: {
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
    bgOptions?: {
      info?: string;
      success?: string;
      warning?: string;
      danger?: string;
    };
    textOptions?: {
      info?: string;
      success?: string;
      warning?: string;
      danger?: string;
    };
  }
}
