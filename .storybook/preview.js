
import React from "react";
import { addParameters } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from './DocsContainer';
import light from './Theme.light';
import dark from './Theme.dark';

import { SpacingSample } from './components/SpacingSample';
import { FontSizeTable } from './components/FontSizeTable';

import '../src/theme/index.css';
import { RUIProvider } from "../src/components/RUIProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
    components: {
      SpacingSample,
      FontSizeTable,
    }
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
  options: {
    storySort: {
      order: [
        'Getting Started',
        ['Overview', 'Installation', 'Usage', 'Contributing'],
        'Design Tokens',
        ['Typography', 'Iconography', 'Color', 'Spacing'],
        'Layout',
        'Unstyled',
        'Components',
        'Utilities',
        ['Overview'],
        'BUX Stuff',
        ['Overview'],
        'Forms',
        ['Overview'],
        'Contributing',
      ]
    }
  }
};

export const decorators = [
  (Story) => (
    <div data-theme={useDarkMode() ? 'dark' : 'light'} data-decorator="true">
      <RUIProvider>
        <Story />
      </RUIProvider>
    </div>
  ),
];
