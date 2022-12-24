import classNames from 'classnames'; // TODO: Swap to clsx

// Utilities for handling styles

import {
  Align,
  FontWeight,
  Justify,
  FontSize,
  ThemeSize,
  FontFamily,
  PositiveSpacing
} from '../types';

import { backgroundColorClasses, borderColorClasses, Color, textColorClasses } from './colors';

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

export function tc(color?: Color): string {
  if (!color) return '';
  return textColorClasses[color] ?? 'THEME_ERROR ERROR:missing-tc:' + color;
}

export function ff(family?: FontFamily): string {
  if (!family) return '';
  return fontFamilyClasses[family] ?? fontFamilyClasses.sans;
}

export function bgc(color?: Color): string {
  if (!color) return '';
  return backgroundColorClasses[color] ?? 'THEME_ERROR ERROR:missing-bg:' + color;
}

export function bc(color: Color): string {
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
