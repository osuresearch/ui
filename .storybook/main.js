const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../@(src|docs)/**/*.stories.mdx',
    '../@(src|docs)/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: [
    '../docs/diagrams'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-dark-mode'
  ],
  framework: '@storybook/react',
  // features: {
  //   storyStoreV7: true
  // },
  typescript: {
    check: false,
    // checkOptions: {},
    // reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (
        // Whitelist libraries with props that we expose through
        // our own components. Mostly React Aria / React Stately things.
        prop.parent ? (
          /@react-types/.test(prop.parent.fileName) ||
          /react-aria/.test(prop.parent.fileName) ||
          /react-stately/.test(prop.parent.fileName) ||
          !/node_modules/.test(prop.parent.fileName)
        ) : true
      ),
      // NOTE: this default cannot be changed
      savePropValueAsString: true,
    },
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      }),
    ]

    return config
  }
}
