// Fonts
import '@fontsource-variable/nunito-sans';
import '@fontsource/source-serif-pro';
import '@fontsource/source-serif-pro/900.css';

import {
  Shadows,
  createTheme,
  formHelperTextClasses,
  formLabelClasses,
  outlinedInputClasses,
} from '@mui/material';

// Colors
import * as colors from './colors';
import { accents } from './colors/accents';

// Base theme rules - breakpoints, palette, typography, etc.
let theme = createTheme({
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
  palette: {
    mode: 'light',
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
      main: '#26686d',
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
});

// Component overrides for aligning with BUX
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          'scrollbarColor': '#6b6b6b #2b2b2b',
          '& *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            width: '12px',
          },
          '& *::-webkit-scrollbar-thumb': {
            backgroundColor: '#6b6b6b',
            minHeight: 24,
          },
          '& *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#959595',
          },
          '& *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#959595',
          },
          '& *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#959595',
          },
          '& *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
        },
      },
    },
    MuiDivider: {
      // Thicker border lines on dividers
      styleOverrides: {
        root: {
          'borderBottomWidth': 2,
          '&:before, &:after': {
            borderTopWidth: 2,
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        shape: 'rounded',
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: '❯',
      },
      styleOverrides: {
        root: {
          fontSize: 14,
        },
        separator: {
          fontSize: 10,
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        variant: 'filled',
      },
      styleOverrides: {
        icon: ({ ownerState, theme }: any) => ({
          // Note that !important is only because of the relationship between paper + root
          // being more specific than what we can do here with an icon style override
          color:
            ownerState.severity === 'error'
              ? theme.palette.common.white
              : theme.palette[ownerState.severity].dark + ' !important',
          fontSize: 26,
        }),
        root: ({ ownerState, theme }: any) => ({
          // Darken the border when applied to outlined variants
          borderColor: theme.palette[ownerState.severity].dark,
        }),
        message: {
          // Adjustment due to the larger icon size
          paddingTop: '10px',
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: `2px solid ${colors.blue[700]}`,
            outlineOffset: '1px',
          },
          // Double the border width of buttons
          '&.MuiButton-outlined, &.MuiButton-outlined:hover': {
            borderWidth: 2,
          },
          // Our primary buttons will gray when hovered
          '&.MuiButton-containedPrimary:hover': {
            background: colors.gray[800],
            color: colors.white,
          },
          '&.MuiButton-outlinedPrimary': {
            border: `2px solid ${colors.scarlet[100]}`,
          },
          '&.MuiButton-outlinedPrimary:hover': {
            border: `2px solid ${colors.gray[800]}`,
            background: colors.gray[800],
            color: colors.white,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          // Don't use primary color for menu items
          '&.Mui-selected': {
            background: colors.gray[200], // 'red !important',
          },
          '&.Mui-selected:hover': {
            background: colors.gray[300], // 'red !important',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          borderBottom: `2px solid ${colors.gray[700]}`,
        },
        root: {
          borderBottom: `2px solid ${colors.gray[100]}`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '87.5%', // 14px

          // Don't change label color when in error or disabled.
          // We display a secondary error message directly under the helper.
          [`&.${formHelperTextClasses.error}, &.${formHelperTextClasses.disabled}`]: {
            color: 'inherit',
          },
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          // Correction for buttons that have 2px borders
          '.MuiButtonGroup-grouped:not(:first-of-type)': {
            marginLeft: -2,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        color: 'gray',
      },
    },
    MuiToggleButton: {
      defaultProps: {
        color: 'gray',
      },
      styleOverrides: {
        root: ({ ownerState, theme }: any) => ({
          '&.Mui-selected, &.Mui-selected:hover': {
            color: theme.palette[ownerState.color].contrastText,
            backgroundColor: theme.palette[ownerState.color].main,
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.gray[900],
          // Don't change label color when focused, in error, or disabled.
          [`&.${formLabelClasses.focused}, &.${formLabelClasses.error}, &.${formLabelClasses.disabled}`]:
            {
              color: 'inherit',
            },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.gray[900],
          // Don't change label color when focused
          [`&.${formLabelClasses.focused}`]: {
            color: 'inherit',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        // TODO: Margin between the tooltip and the target.
        // Not sure what class it's in
        tooltip: {
          fontSize: 14,
          backgroundColor: 'black',
        },
        arrow: {
          color: 'black',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
      },
      styleOverrides: {
        colorInherit: {
          backgroundColor: 'inherit',
          color: 'inherit',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.gray[900],
          borderRadius: 0,
          padding: 0,
          margin: 4,
          marginRight: 6,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: colors.gray[900],
        },
        root: {
          // Additional margin is added so that the overflow
          // of a scroll container doesn't hide the focusVisible
          // outline of the tab button
          margin: 3,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'always',
      },
      styleOverrides: {
        root: {
          '&:hover': {
            background: colors.gray[100],
            color: colors.gray[900],
          },
          '&.Mui-focusVisible': {
            outline: `2px solid ${colors.blue[700]}`,
            outlineOffset: '1px',
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'primary',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: 8,
        },
        root: {
          // Thick and light input borders
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: colors.gray[100],
            borderWidth: 2,
          },
          [`&.${formLabelClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: colors.gray[900],
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        rail: {
          backgroundColor: colors.gray[500],
        },
        thumb: {
          // Less aggressive hover/active outlines for sliders
          [`&:hover`]: {
            boxShadow: '0px 0px 0px 4px rgb(0 0 47 / 16%)',
          },
          [`&.Mui-focusVisible`]: {
            boxShadow: '0px 0px 0px 4px rgb(0 0 47 / 16%)',
          },
          [`&.Mui-active`]: {
            boxShadow: '0px 0px 0px 8px rgb(0 0 47 / 16%)',
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          // Don't grey out input labels when disabled or readonly
          '&.Mui-disabled': {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray[200],
        },
      },
    },
  },
});

export { theme };