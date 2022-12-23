
import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#26686d',
  colorSecondary: '#ba0c2f',

  // UI
  appBg: '#f6f7f8', // gray-tint-90
  appContentBg: 'white',
  // appBorderColor: '#3f4443', I like the default
  appBorderRadius: 0,

  // Typography
  fontBase: 'BuckeyeSans, HelveticaNeue, Helvetica, Arial, serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#141517', // black
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#212325',
  barSelectedColor: '#ba0c2f',
  barBg: '#f6f7f8', // gray-tint-90

  // Form colors
  inputBg: 'white',
  inputBorder: '#eff1f2', // gray-tint-80
  inputTextColor: '#141517', // black
  inputBorderRadius: 0,

  brandTitle: 'Research UI',
  brandUrl: 'https://github.com/osuresearch/ui',
  brandImage: 'https://place-hold.it/350x150',
});
