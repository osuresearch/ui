import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer } from './DocsContainer';

import  "../src/sass5/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  viewMode: 'docs',
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
  },
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal }
  }
}

// export const decorators = [
//   (Story) => (
//     <div className={useDarkMode() ? "dark" : "light"}>
//       <Story />
//     </div>
//   ),
// ];
// addParameters({
//   options: {
//     theme: themes.dark,
//   }
// })
