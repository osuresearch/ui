
import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { DocsContainer } from './DocsContainer';
import light from './Theme.light';
import dark from './Theme.dark';

import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
  },
  // Don't add a second background color button.
  // We have a global dark mode toggle
  backgrounds: {
    disable: true,
  },
  // Reorder tabs to place docs first
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  // Override dark and light modes with a custom theme
  darkMode: {
    dark,
    light,
  },
};

export const decorators = [
  (Story) => (
    <div data-theme={useDarkMode() ? 'dark' : 'light'} data-decorator="true">
      <Story />
    </div>
  ),
];

