import { PaletteColorOptions, PaletteOptions } from '@mui/material';

// Colors
import * as colors from './colors';
import { accents } from './colors/accents';

// Augment the palette with custom themes we can use throughout
declare module '@mui/material/styles' {
  interface Palette {
    link: PaletteColorOptions;
  }

  interface PaletteOptions {
    link?: PaletteColorOptions;
  }
}

export const dark: PaletteOptions = {
  mode: 'dark',
  contrastThreshold: 4.5,
  divider: colors.gray[800],
  common: {
    black: colors.black,
    white: colors.white,
  },
  primary: {
    light: colors.blue[600],
    main: colors.blue[700],
    dark: colors.blue[800],
    contrastText: colors.white,
  },
  secondary: {
    light: colors.teal[400],
    main: colors.teal[500],
    dark: colors.teal[600],
    contrastText: colors.white,
  },
  background: {
    default: colors.black,
    paper: colors.gray[900],
  },
  text: {
    primary: colors.gray[100],
    secondary: colors.gray[400],
    disabled: colors.gray[400],
  },
  error: {
    light: colors.scarlet[100],
    main: colors.scarlet[100],
    dark: colors.scarlet[100],
    contrastText: colors.white,
  },
  warning: {
    light: colors.gold[100],
    main: colors.gold[100],
    dark: colors.gold[500],
    contrastText: colors.black,
  },
  info: {
    light: colors.blue[150],
    main: colors.blue[150],
    dark: colors.blue[500],
    contrastText: colors.black,
  },
  success: {
    light: colors.green[200],
    main: colors.green[200],
    dark: colors.green[600],
    contrastText: colors.black,
  },
  ...accents,
};
