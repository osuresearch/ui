import { PaletteColorOptions } from '@mui/material';

import * as color from './index';

export const accents = {
  gray: {
    light: color.gray[400],
    main: color.gray[500],
    dark: color.gray[600],
    contrastText: color.black,
  },
  blue: {
    light: color.blue[400],
    main: color.blue[500],
    dark: color.blue[600],
    contrastText: color.black,
  },
  orange: {
    light: color.orange[400],
    main: color.orange[500],
    dark: color.orange[600],
    contrastText: color.black,
  },
  green: {
    light: color.green[400],
    main: color.green[500],
    dark: color.green[600],
    contrastText: color.black,
  },
  brown: {
    light: color.brown[400],
    main: color.brown[500],
    dark: color.brown[600],
    contrastText: color.white,
  },
  pink: {
    light: color.pink[400],
    main: color.pink[500],
    dark: color.pink[600],
    contrastText: color.black,
  },
  violet: {
    light: color.violet[400],
    main: color.violet[500],
    dark: color.violet[600],
    contrastText: color.white,
  },
  aqua: {
    light: color.aqua[400],
    main: color.aqua[500],
    dark: color.aqua[600],
    contrastText: color.black,
  },
  teal: {
    light: color.teal[400],
    main: color.teal[500],
    dark: color.teal[600],
    contrastText: color.white,
  },
  gold: {
    light: color.gold[400],
    main: color.gold[500],
    dark: color.gold[600],
    contrastText: color.black,
  },
} satisfies Record<string, PaletteColorOptions>;

// Augment the palette types with accent colors
declare module '@mui/material/styles' {
  interface Palette {
    gray: PaletteColorOptions;
    blue: PaletteColorOptions;
    orange: PaletteColorOptions;
    green: PaletteColorOptions;
    brown: PaletteColorOptions;
    pink: PaletteColorOptions;
    violet: PaletteColorOptions;
    aqua: PaletteColorOptions;
    teal: PaletteColorOptions;
    gold: PaletteColorOptions;
  }

  interface PaletteOptions {
    gray?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    green?: PaletteColorOptions;
    brown?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    violet?: PaletteColorOptions;
    aqua?: PaletteColorOptions;
    teal?: PaletteColorOptions;
    gold?: PaletteColorOptions;
  }
}

// Augment components that take a color prop with accents

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
    blue: true;
    orange: true;
    green: true;
    brown: true;
    pink: true;
    violet: true;
    aqua: true;
    teal: true;
    gold: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    gray: true;
    blue: true;
    orange: true;
    green: true;
    brown: true;
    pink: true;
    violet: true;
    aqua: true;
    teal: true;
    gold: true;
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides {
    gray: true;
    blue: true;
    orange: true;
    green: true;
    brown: true;
    pink: true;
    violet: true;
    aqua: true;
    teal: true;
    gold: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    gray: true;
    blue: true;
    orange: true;
    green: true;
    brown: true;
    pink: true;
    violet: true;
    aqua: true;
    teal: true;
    gold: true;
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides {
    gray: true;
    blue: true;
    orange: true;
    green: true;
    brown: true;
    pink: true;
    violet: true;
    aqua: true;
    teal: true;
    gold: true;
  }
}
