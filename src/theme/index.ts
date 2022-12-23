import classNames from 'classnames'; // TODO: Swap to clsx

// Utilities for handling styles

import {
  Align,
  FontWeight,
  Justify,
  FontSize,
  ThemeColor,
  ThemeSize,
  FontFamily,
  Spacing,
  PositiveSpacing
} from '../types';

// TODO: Somehow automate loading in all the color palettes
// from tailwind config so we don't need to define them all here.

const fontSizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  xxl: 'text-xxl'
} as Record<FontSize, string>;

const fontFamilyClasses = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono'
} as Record<FontFamily, string>;

const fontWeightClasses = {
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black'
} as Record<FontWeight, string>;

const textColorClasses = {
  // Brand
  'scarlet': 'text-scarlet',
  'gray': 'text-gray',

  // Accents
  'blue': 'text-blue',
  'orange': 'text-orange',
  'green': 'text-green',
  'brown': 'text-brown',
  'pink': 'text-pink',
  'violet': 'text-violet',
  'aqua': 'text-aqua',
  'teal': 'text-teal',
  'gold': 'text-gold',

  // Semantic colors
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'tertiary': 'text-tertiary',

  'dimmed': 'text-dimmed',

  // Neutrals
  'black': 'text-black',
  'white': 'text-white',

  'neutral-0': 'text-neutral-0',
  'neutral-20': 'text-neutral-20',
  'neutral-40': 'text-neutral-40',
  'neutral-60': 'text-neutral-60',
  'neutral-80': 'text-neutral-80',
  'neutral-90': 'text-neutral-90',
  'neutral-100': 'text-neutral-100',

  // Utilities
  'info': 'text-info',
  'info-light': 'text-info-light',
  'success': 'text-success',
  'success-light': 'text-success-light',
  'warning': 'text-warning',
  'warning-light': 'text-warning-light',
  'error': 'text-error',
  'error-light': 'text-error-light'
} as Partial<Record<ThemeColor, string>>;

const backgroundColorClasses = {
  // Primaries
  'scarlet': 'bg-scarlet',
  'gray': 'bg-gray',
  'black': 'bg-black',
  'white': 'bg-white',

  // Accents
  'blue': 'bg-blue',
  'orange': 'bg-orange',
  'green': 'bg-green',
  'brown': 'bg-brown',
  'pink': 'bg-pink',
  'violet': 'bg-violet',
  'aqua': 'bg-aqua',
  'teal': 'bg-teal',
  'gold': 'bg-gold',

  // Utilities
  'info': 'bg-info',
  'info-light': 'bg-info-light',
  'success': 'bg-success',
  'success-light': 'bg-success-light',
  'warning': 'bg-warning',
  'warning-light': 'bg-warning-light',
  'error': 'bg-error',
  'error-light': 'bg-error-light'
} as Partial<Record<ThemeColor, string>>;

const borderColorClasses = {
  // Primaries
  'scarlet': 'border-scarlet',
  'gray': 'border-gray',
  'black': 'border-black',
  'white': 'border-white',

  // Accents
  'blue': 'border-blue',
  'orange': 'border-orange',
  'green': 'border-green',
  'brown': 'border-brown',
  'pink': 'border-pink',
  'violet': 'border-violet',
  'aqua': 'border-aqua',
  'teal': 'border-teal',
  'gold': 'border-gold',

  // Utilities
  'info': 'border-info',
  'info-light': 'border-info-light',
  'success': 'border-success',
  'success-light': 'border-success-light',
  'warning': 'border-warning',
  'warning-light': 'border-warning-light',
  'error': 'border-error',
  'error-light': 'border-error-light'
} as Partial<Record<ThemeColor, string>>;

// Theme utilities

export function cx(...args: classNames.ArgumentArray): string {
  return classNames(args);
}

export function fs(size?: FontSize): string {
  if (!size) return '';
  return fontSizeClasses[size] ?? '';
}

export function fw(size?: FontWeight): string {
  if (!size) return '';
  return fontWeightClasses[size] ?? '';
}

export function tc(color?: ThemeColor): string {
  if (!color) return '';
  return textColorClasses[color] ?? 'THEME_ERROR ERROR:missing-tc:' + color;
}

export function ff(family?: FontFamily): string {
  if (!family) return '';
  return fontFamilyClasses[family] ?? fontFamilyClasses.sans;
}

export function bg(color?: ThemeColor): string {
  if (!color) return '';
  return backgroundColorClasses[color] ?? 'THEME_ERROR ERROR:missing-bg:' + color;
}

export function bc(color: ThemeColor): string {
  if (!color) return '';
  return borderColorClasses[color] ?? 'THEME_ERROR ERROR:missing-bc:' + color;
}

export function hw(size: ThemeSize): string {
  const className = {
    xs: 'h-xs w-xs',
    sm: 'h-sm w-sm',
    md: 'h-md w-md',
    lg: 'h-lg w-lg',
    xl: 'h-xl w-xl'
  } as Record<ThemeSize, string>;

  // Note that we exclude negatives on purpose.
  return className[size] ?? '';
}

export function align(value: Align): string {
  const className = {
    stretch: 'items-stretch',
    center: 'items-center',
    start: 'items-start',
    end: 'items-end'
  };

  return className[value];
}

export function gap(spacing: PositiveSpacing): string {
  const className = {
    0: 'gap-0',
    1: 'gap-1',
    xxs: 'gap-xxs',
    xs: 'gap-xs',
    sm: 'gap-sm',
    md: 'gap-md',
    lg: 'gap-lg',
    xl: 'gap-xl',
    xxl: 'gap-xxl'
  } as Record<PositiveSpacing, string>;

  return className[spacing] ?? '';
}

export function justify(value: Justify): string {
  const className = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    apart: 'justify-between'
  } as Record<Justify, string>;

  return className[value] ?? '';
}
