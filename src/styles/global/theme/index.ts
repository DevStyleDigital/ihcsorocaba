import type { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const defaultTheme: iTheme = {
  name: 'default',

  colors: {
    text: '#525252',
    error: '#f44336',
    shadow: '0, 0, 0', // rgb(0, 0, 0)
    primary: '#25317A',
    secondary: '#FFD25D',
    background: '#FFFFFF',
    footerBottom: '#DADADA',
    documentTextBackground: '#E5E5E5',
  },
  ...sharedTheme,
};
