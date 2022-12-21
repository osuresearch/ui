
import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#ba0c2f',
  colorSecondary: '#ba0c2f',

  // UI
  appBg: '#212325', // gray-shade-80
  appContentBg: '#141517', // black
  appBorderRadius: 0,

  // Typography
  fontBase: 'BuckeyeSans, HelveticaNeue, Helvetica, Arial, serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#a7b1b7',
  barSelectedColor: '#ba0c2f',
  barBg: '#212325',

  // Form colors
  inputBg: '#212325', // gray-shade-80
  inputBorder: '#3f4443', // gray-shade-60
  inputTextColor: 'white',
  inputBorderRadius: 0,

  brandTitle: 'Research UI',
  brandUrl: 'https://github.com/osuresearch/ui',
  brandImage: 'https://place-hold.it/350x150',
});
