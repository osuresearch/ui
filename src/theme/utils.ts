import classNames from 'classnames';

// TODO: Swap to clsx
// Utilities for handling styles
import {
  Align,
  FontFamily,
  FontSize,
  FontWeight,
  Justify,
  PositiveSpacing,
  ThemeSize
} from '../types';
import { Color, backgroundColorClasses, borderColorClasses, textColorClasses } from './colors';

// TODO: Somehow automate loading in all the color palettes
// from tailwind config so we don't need to define them all here.

const fontSizeClasses = {
  xs: 'rui-text-xs',
  sm: 'rui-text-sm',
  base: 'rui-text-base',
  md: 'rui-text-md',
  lg: 'rui-text-lg',
  xl: 'rui-text-xl',
  xxl: 'rui-text-xxl'
} as Record<FontSize, string>;

const fontFamilyClasses = {
  sans: 'rui-font-sans',
  serif: 'rui-font-serif',
  mono: 'rui-font-mono'
} as Record<FontFamily, string>;

const fontWeightClasses = {
  normal: 'rui-font-normal',
  semibold: 'rui-font-semibold',
  bold: 'rui-font-bold',
  extrabold: 'rui-font-extrabold',
  black: 'rui-font-black'
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
    xxs: 'rui-h-xxs rui-w-xxs',
    xs: 'rui-h-xs rui-w-xs',
    sm: 'rui-h-sm rui-w-sm',
    md: 'rui-h-md rui-w-md',
    lg: 'rui-h-lg rui-w-lg',
    xl: 'rui-h-xl rui-w-xl',
    xxl: 'rui-h-xxl rui-w-xxl'
  } as Record<ThemeSize, string>;

  // Note that we exclude negatives on purpose.
  return className[size] ?? '';
}

export function align(value: Align): string {
  const className = {
    stretch: 'rui-items-stretch',
    center: 'rui-items-center',
    start: 'rui-items-start',
    end: 'rui-items-end'
  };

  return className[value];
}

export function gap(spacing: PositiveSpacing): string {
  const className = {
    0: 'rui-gap-0',
    1: 'rui-gap-1',
    xxs: 'rui-gap-xxs',
    xs: 'rui-gap-xs',
    sm: 'rui-gap-sm',
    md: 'rui-gap-md',
    lg: 'rui-gap-lg',
    xl: 'rui-gap-xl',
    xxl: 'rui-gap-xxl'
  } as Record<PositiveSpacing, string>;

  return className[spacing] ?? '';
}

export function justify(value: Justify): string {
  const className = {
    start: 'rui-justify-start',
    end: 'rui-justify-end',
    center: 'rui-justify-center',
    apart: 'rui-justify-between'
  } as Record<Justify, string>;

  return className[value] ?? '';
}
