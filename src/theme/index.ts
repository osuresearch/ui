// Fonts.
// TODO: This does a CSS import which does not work for NextJS SSR
import '@fontsource-variable/nunito-sans';
import '@fontsource/source-serif-pro';
import '@fontsource/source-serif-pro/900.css';

import { Shadows, createTheme } from '@mui/material';

import { components } from './components';
import { dark } from './dark';
import { light } from './light';

/**
 * Standard rules for typography, breakpoints, etc.
 */
const base = createTheme({
  // Disable shadows globally. See: https://stackoverflow.com/a/62262181
  shadows: Array(25).fill('none') as Shadows,
  shape: {
    borderRadius: 0,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: "'Nunito Sans Variable', HelveticaNeue, Helvetica, Arial, sans-serif",
    body1: {
      lineHeight: '1.5rem',
    },
    button: {
      textTransform: 'initial',
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '87.5%',
    },
    h1: {
      fontFamily: "'Source Serif Pro', Georgia, serif",
      fontSize: '2.5rem',
      lineHeight: '3rem',
      fontWeight: 900,
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
      fontWeight: 800,
    },
    h3: {
      fontSize: '1.25rem',
      lineHeight: '1.625rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
  },
  components,
});

const lightTheme = createTheme(base, {
  palette: light,
});

const darkTheme = createTheme(base, {
  palette: dark,
});

export { lightTheme, darkTheme };
