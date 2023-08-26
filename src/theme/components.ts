import {
  Theme,
  ThemeOptions,
  formHelperTextClasses,
  formLabelClasses,
  outlinedInputClasses,
} from '@mui/material';

import * as colors from './colors';

/**
 * Per-component theme configurations.
 *
 * This same configuration map is used for both light and dark modes.
 */
export const components: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: (theme: Theme) => ({
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
      }),
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
      icon: ({ ownerState, theme }) => ({
        // Note that !important is only because of the relationship between paper + root
        // being more specific than what we can do here with an icon style override
        color:
          ownerState.severity === 'error'
            ? theme.palette.common.white
            : theme.palette[ownerState?.severity ?? 'info'].dark + ' !important',
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
      root: ({ theme }) => ({
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
          background: theme.palette.mode === 'light' ? colors.gray[800] : colors.gray[900],
          color: theme.palette.common.white,
        },
        '&.MuiButton-outlinedPrimary': {
          border: `2px solid ${
            theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white
          }`,
        },
        '&.MuiButton-outlinedPrimary:hover': {
          border: `2px solid ${
            theme.palette.mode === 'light' ? colors.gray[800] : colors.gray[900]
          }`,
          background: theme.palette.mode === 'light' ? colors.gray[800] : colors.gray[900],
          color: theme.palette.common.white,
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      root: ({ theme }) => ({
        '.MuiPaper-root': {
          background:
            theme.palette.mode === 'light'
              ? theme.palette.background.default
              : theme.palette.background.paper,
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        },
      }),
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
        color: colors.gray[700],
        borderRadius: 0,
        padding: 0,
        margin: 4,
        marginRight: 6,
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        alignSelf: 'start',
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
      root: ({ theme }) => ({
        'color':
          theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
        '&:hover': {
          background: colors.gray[100],
          color: colors.gray[900],
        },
        '&.Mui-focusVisible': {
          outline: `2px solid ${colors.blue[700]}`,
          outlineOffset: '1px',
        },
      }),
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
      label: ({ theme }) => ({
        // Don't grey out input labels when disabled or readonly
        '&.Mui-disabled': {
          color: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: colors.gray[200],
      },
    },
  },
};
