export interface iSharedThemeOptions {
  maxWidth: string;

  fonts: {
    primary: string;
    secondary: string;
  };
  mediaQueries: {
    maxMobile: string;
    maxTablet: string;
    minTablet: string;
    minMobile: string;
  };
  borderRadius: {
    sm: string;
    xl: string;
  };
}

export interface iTheme extends iSharedThemeOptions {
  name: 'default';

  colors: {
    text: string;
    error: string;
    shadow: string;
    primary: string;
    secondary: string;
    background: string;
    footerBottom: string;
    documentTextBackground: string;
  };
}
