/**
 * Theme-related utilities
 */
import {
  ResponsiveMap,
  ResponsiveProp,
  ScreenSize,
  Spacing,
  Theme,
  ThemeMap,
  ThemeProp,
  negativeSpacing,
  screenSize,
  spacing,
  theme
} from '../types';

export function isResponsiveMap<T>(value: any): value is ResponsiveMap<T> {
  return (
    typeof value === 'object' &&
    Object.keys(value).filter((k) => screenSize.indexOf(k as ScreenSize) >= 0).length > 0
  );
}

export function isThemeMap<T>(value: any): value is ThemeMap<T> {
  return (
    typeof value === 'object' &&
    Object.keys(value).filter((k) => theme.indexOf(k as Theme) >= 0).length > 0
  );
}

export function isResponsiveObject<T>(value: any): value is Partial<Record<ScreenSize, T>> {
  return (
    typeof value === 'object' &&
    (value.sm !== undefined ||
      value.md !== undefined ||
      value.lg !== undefined ||
      value.xl !== undefined ||
      value.xxl !== undefined)
  );
}

export function isPositiveSpacing(value: any): value is Spacing {
  return spacing.indexOf(value) >= 0;
}

export function isNegativeSpacing(value: any): value is Spacing {
  return negativeSpacing.indexOf(value) >= 0;
}

export function isSpacing(value: any): value is Spacing {
  return isPositiveSpacing(value) || isNegativeSpacing(value);
}

export function resolveResponsiveProp<T>(
  prop: ResponsiveProp<T> | undefined,
  screen: ScreenSize
): T | undefined {
  // The rough algorithm is:
  // use the closest break that is equal to or less than the input screen size.
  // If screen size is smaller than all of them, used the smallest possible.
  // { md: T1, lg: T2 }
  //  screen sizes lg, xl, xxl will use T2, size md will use T1
  //  sizes below md (sm, xs) will use T1.
  // { xs: T1, lg: T2 }
  //  screen sizes lg and lx will use T2
  //  all other sizes will use T1
  if (!prop) {
    return undefined;
  }

  if (!isResponsiveObject(prop)) {
    return prop;
  }

  const current = screenSize.indexOf(screen);

  // Search down from current screen size for the closest lower fit
  for (let i = current; i > 0; i--) {
    if (prop[screenSize[i]] !== undefined) {
      return prop[screenSize[i]] as T;
    }
  }

  // Nothing lower than screen size defined, return lowest overall
  for (let i = 0; i < screenSize.length; i++) {
    if (prop[screenSize[i]] !== undefined) {
      return prop[screenSize[i]] as T;
    }
  }

  // This shouldn't happen in TypeScript-land due to strict type
  // checking, but someone writing JavaScript may hit this.
  throw new Error('No responsive prop could be resolved');
}

export function resolveThemeProp<T>(prop: ThemeProp<T> | undefined, theme: Theme): T | undefined {
  if (!prop) {
    return;
  }

  if (!isThemeMap(prop)) {
    return prop;
  }

  if (prop[theme]) {
    return prop[theme];
  }

  // Fallback to the first key found. Could be a "base" or something else.
  return prop[Object.keys(prop)[0] as Theme];
}

// TODO: Template version. Can be used for justify, font size, theme size, etc.
export function spacingValueToClass(
  prefix: string,
  size: ResponsiveProp<Spacing>,
  screen: ScreenSize = 'sm'
) {
  const value = resolveResponsiveProp(size, screen);
  if (!value) {
    return '';
  }

  // HACK: maw/mah need to be converted to tailwind's naming scheme
  if (prefix === 'maw') prefix = 'max-w';
  else if (prefix === 'mah') prefix = 'max-h';

  // HACK: Same for miw/mih
  if (prefix === 'miw') prefix = 'min-w';
  else if (prefix === 'mih') prefix = 'min-h';

  // Handle negatives by transforming -sm to -p-sm
  if ((value as string)[0] === '-') {
    return `-${prefix}${value}`;
  }

  return `${prefix}-${value}`;
}

export function spacingPropsToClassNames<P extends { [K: string]: ResponsiveProp<Spacing> }>(
  propNames: readonly string[],
  props: P,
  screen: ScreenSize
) {
  return Object.keys(props)
    .filter((k) => propNames.indexOf(k) >= 0)
    .map((k) => spacingValueToClass(k, props[k], screen));
}
