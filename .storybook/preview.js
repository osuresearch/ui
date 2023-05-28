
import React from "react";
import { useDarkMode } from 'storybook-dark-mode';
import light from './Theme.light';
import dark from './Theme.dark';

import { RUIProvider } from "../src/components/RUIProvider";
import { DocsContainer } from '@sb/DocsContainer';
import { SpacingSample } from '@sb/SpacingSample';
import { FontSizeTable } from '@sb/FontSizeTable';
import { DocsPage } from '@sb/DocsPage';

import '../src/theme/index.css';
import '../src/theme/tokens.css';


export const parameters = {
  // We only monitor a subset of actions. Otherwise the performance
  // drops SIGNIFICANTLY when we pass through @react-types events
  // actions: { argTypesRegex: "^on[A-Z].*" },
  actions: { argTypesRegex: "^on(Focus|Blur|Press|Click)" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  docs: {
    // theme: themes.dark,
    // page: DocsPage,
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
        // Guidance
        'Getting Started',
        ['Overview', 'Installation', 'Usage', 'Contributing'],

        'Design Tokens',
        ['Typography', 'Iconography', 'Color', 'Spacing'],

        // Common things
        'Layout', ['Overview'],
        'Navigation',
        'Buttons', ['Button'],
        'Components',
        'Hooks',
        'Utilities',

        // Uncommon / specialized things
        'Forms', ['Overview'],
        'Ohio State', ['Overview', 'Design Tokens'],
        'Unstyled', ['Overview'],
        'Internal',
      ]
    }
  }
};

export const decorators = [
  (Story) => (
    <RUIProvider theme={useDarkMode() ? 'dark' : 'light'}>
      <Story />
    </RUIProvider>
  ),
];
