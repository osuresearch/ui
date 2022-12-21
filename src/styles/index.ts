import classNames from 'classnames'; // TODO: Swap to clsx

// Utilities for handling styles

import { Align, Justify, ThemeColor, ThemeSize } from '../types';

export function cx(...args: classNames.ArgumentArray): string {
  return classNames(args);
}

// TODO: Somehow automate loading in all the color palettes
// from tailwind config so we don't need to define them all here.

export function tc(color: ThemeColor): string {
  const className = {
    // Primaries
    'scarlet': 'text-scarlet',
    'gray': 'text-gray',
    'black': 'text-black',
    'white': 'text-white',

    'normal': 'text-black dark:text-white',

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

    // Utilities
    'info': 'text-info',
    'info-light': 'text-info-light',
    'success': 'text-success',
    'success-light': 'text-success-light',
    'warning': 'text-warning',
    'warning-light': 'text-warning-light',
    'error': 'text-error',
    'error-light': 'text-error-light',

    'dimmed': 'text-gray-shade-40 dark:text-gray'
  } as Partial<Record<ThemeColor, string>>;

  return className[color] ?? '';
}

export function bg(color: ThemeColor): string {
  const bgClasses = {
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

  return bgClasses[color] ?? '';
}

export function bc(color: ThemeColor): string {
  const className = {
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

  return className[color] ?? '';
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

export function gap(size: ThemeSize): string {
  const className = {
    xs: 'gap-xs',
    sm: 'gap-sm',
    md: 'gap-md',
    lg: 'gap-lg',
    xl: 'gap-xl',
    xxl: 'gap-xxl'
  } as Record<ThemeSize, string>;

  return className[size] ?? '';
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
