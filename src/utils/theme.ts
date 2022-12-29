/**
 * Theme-related utilities
 */
import { ResponsiveMap, ScreenSize, Theme, ThemeMap, screenSize, theme } from '../types';

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
