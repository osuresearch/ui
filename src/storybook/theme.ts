import { ThemeVarsPartial, create } from '@storybook/theming';

import { Theme } from '@mui/material';

// import { version } from '../../package.json';
// Won't have the latest before a new storybook is compiled.
import { darkTheme, lightTheme } from '../theme';

/**
 * Generate a Storybook theme configured to replicate MUI
 * @param theme
 */
function createThemeFromMUI(theme: Theme): ThemeVarsPartial {
  return create({
    base: theme.palette.mode,

    // We intentionally use primary for both to make the container a bit more consistent
    colorPrimary: theme.palette.primary.main,
    colorSecondary: theme.palette.primary.main,

    // UI
    appBg: theme.palette.background.paper,
    appContentBg: theme.palette.background.default,
    appBorderRadius: 0,

    // Typography
    fontBase: theme.typography.fontFamily,
    fontCode: "Menlo, Monaco, 'Courier New', monospace",

    // Text colors
    textColor: theme.palette.text.primary,
    textInverseColor: theme.palette.text.secondary,
    textMutedColor: theme.palette.text.secondary,

    // Toolbar default and active colors
    barTextColor: theme.palette.text.primary,
    barSelectedColor: theme.palette.primary.main,
    barBg: theme.palette.background.paper,

    // Form colors
    inputBg: theme.palette.background.default,
    inputBorder: theme.palette.background.paper,
    inputTextColor: theme.palette.text.primary,
    inputBorderRadius: 0,

    // TODO: Can I embed the version number via build here?
    brandTitle: `Research UI v5`,
    brandUrl: 'https://github.com/osuresearch/ui',
    // brandImage: 'https://place-hold.it/350x150',
  });
}

export const light = createThemeFromMUI(lightTheme);
export const dark = createThemeFromMUI(darkTheme);
