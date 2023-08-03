import { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import React from 'react';

import { Typography } from '@mui/material';

import { RUIProvider } from '../src/components/RUIProvider';
import { DocsContainer } from '../src/storybook/DocsContainer';
import dark from '../src/storybook/Theme.dark';
import light from '../src/storybook/Theme.light';

const preview: Preview = {
  parameters: {
    // actions: {
    //   argTypesRegex: "^on(Focus|Blur|Press|Click)"
    // },
    docs: {
      toc: true,
      container: DocsContainer,
      theme: light,
      components: {
        h1: (props) => <Typography variant="h1" {...props} />,
        h2: (props) => <Typography variant="h2" {...props} />,
        h3: (props) => <Typography variant="h3" {...props} />,
        h4: (props) => <Typography variant="h4" {...props} />,
      },
    },
    // darkMode: {
    //   current: 'light',
    //   stylePreview: true,
    //   dark,
    //   light,
    // },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
    options: {
      storySort: {
        order: [
          // Guidance
          'Getting Started',
          ['Overview', 'Installation', 'Usage', 'Contributing'],

          'Design Tokens',
          ['Typography', 'Iconography', 'Color', 'Spacing'],

          'MUI Components',
          ['Overview'],

          'Layout',
          ['Overview'],

          'Navigation',

          'Buttons',
          ['Button'],
          'Components',
          'Hooks',
          'Utilities',

          'Forms',
          ['Overview'],

          'Ohio State',
          ['Overview', 'Design Tokens'],

          'Unstyled',
          ['Overview'],

          'Internal',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <RUIProvider theme={useDarkMode() ? 'dark' : 'light'}>
        <Story />
      </RUIProvider>
    ),
  ],
};

export default preview;
