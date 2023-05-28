import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../@(src|docs)/**/*.stories.mdx', '../@(src|docs)/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../docs/diagrams'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y', {
    name: '@storybook/addon-docs',
    options: {
      transcludeMarkdown: true
    }
  },
  {
    name: '@storybook/addon-styling',
    options: {
      postCss: true,
    }
  },
  'storybook-dark-mode'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  typescript: {
    check: false,
    // checkOptions: {},
    // reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: prop =>
      // Whitelist libraries with props that we expose through
      // our own components. Mostly React Aria / React Stately things.
      prop.parent ? /@react-types/.test(prop.parent.fileName) || /react-aria/.test(prop.parent.fileName) || /react-stately/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName) : true,
      // NOTE: this default cannot be changed
      savePropValueAsString: true
    }
  },
  // Fix for Typescript aliases not resolving.
  // See: https://storybook.js.org/docs/react/builders/webpack#typescript-modules-are-not-resolved-within-storybook
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;
