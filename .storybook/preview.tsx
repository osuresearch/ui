import addons from '@storybook/addons';
import { Preview } from '@storybook/react';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';

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
    darkMode: {
      current: 'light',
      stylePreview: false,
      dark,
      light,
    },
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
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

// create a component that listens for the DARK_MODE event
function ThemeWrapper(props) {
  const dark = useDarkMode();
  return <RUIProvider theme={dark ? 'dark' : 'light'}>{props.children}</RUIProvider>;
}

export default preview;
