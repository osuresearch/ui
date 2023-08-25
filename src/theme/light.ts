import { PaletteOptions } from '@mui/material';

// Colors
import * as colors from './colors';
import { accents } from './colors/accents';

export const light: PaletteOptions = {
  mode: 'light',
  // Enforce 4.5:1 for generative colors
  contrastThreshold: 4.5,
  divider: colors.gray[100],
  common: {
    black: colors.black,
    white: colors.white,
  },
  primary: {
    light: colors.scarlet[100],
    main: colors.scarlet[100],
    dark: colors.scarlet[400],
    contrastText: colors.white,
  },
  secondary: {
    light: colors.teal[400],
    main: colors.teal[500],
    dark: colors.teal[600],
  },
  background: {
    default: colors.white,
    paper: colors.gray[100],
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[700],
    disabled: colors.gray[700],
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
