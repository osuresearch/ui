import { themes } from '@storybook/theming';
import  "../src/sass5/index.scss";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal }
  }
}

// addParameters({
//   options: {
//     theme: themes.dark,
//   }
// })
