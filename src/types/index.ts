import type { CSSProperties, ForwardRefExoticComponent } from 'react';

import { Color } from '../theme/colors';

export * from '../theme/colors';

export * from './form';

export const spacing = [0, 1, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'auto', 'full'] as const;
export type PositiveSpacing = typeof spacing[number];

export const negativeSpacing = [-1, '-xxs', '-xs', '-sm', '-md', '-lg', '-xl', '-xxl'] as const;
export type Spacing = typeof spacing[number] | typeof negativeSpacing[number];

export const theme = ['light', 'dark'] as const;
export type Theme = typeof theme[number];

export const size = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type ThemeSize = typeof size[number];

export const fontSize = ['xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl'] as const;
export type FontSize = typeof fontSize[number];

export const fontWeight = ['normal', 'semibold', 'bold', 'extrabold', 'black'] as const;
export type FontWeight = typeof fontWeight[number];

export const fontFamily = ['sans', 'serif', 'mono'] as const;
export type FontFamily = typeof fontFamily[number];

export const screenSize = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type ScreenSize = typeof screenSize[number];

export const align = ['start', 'end', 'stretch', 'center'] as const;
export type Align = typeof align[number];

export const justify = ['start', 'end', 'center', 'apart'] as const;
export type Justify = typeof justify[number];

// export type NumberSize = ThemeSize | number;
// export type ThemeSizes = Record<ThemeSize, number>;

// Prop that can either be a single value or an object mapping
// theme sizes to values for responsive changes

export const fontProps = ['fs', 'fw', 'ff'] as const;
export const colorProps = ['c', 'bgc'] as const;
export const sizeProps = ['w', 'h', 'miw', 'mih', 'maw', 'mah'] as const;
export const paddingProps = ['p', 'px', 'py', 'pl', 'pt', 'pr', 'pb'] as const;
export const marginProps = ['m', 'mx', 'my', 'ml', 'mt', 'mr', 'mb'] as const;
export const layoutProps = ['gridArea', 'gridSpan'] as const;

export type FontPropName = typeof fontProps[number];
export type ColorPropName = typeof colorProps[number];
export type SizePropName = typeof sizeProps[number];
export type PaddingPropName = typeof paddingProps[number];
export type MarginPropName = typeof marginProps[number];
export type LayoutPropName = typeof layoutProps[number];

export const styleSystemPropNames = [
  ...fontProps,
  ...colorProps,
  ...sizeProps,
  ...paddingProps,
  ...marginProps,
  ...layoutProps
] as const;

export type StyleSystemPropName = typeof styleSystemPropNames[number];

/**
 * Object that maps values to responsive breakpoints
 */
export type ResponsiveMap<T> = Record<ScreenSize, T>;

/**
 * Object that maps values to themes
 */
export type ThemeMap<T> = Record<Theme, T>;

/**
 * A prop that can either be the given type or
 * an object containing values per responsive breakpoint.
 *
 * Examples:
 * ```
 * <Box m="lg">
 * <Box m={{ xl: "lg", sm: "sm" xs: 0 }}>
 * ```
 */
export type ResponsiveProp<Value> = Value | Partial<Record<ScreenSize, Value>>;

/**
 * A prop that can either be the given type or
 * an object containing values per theme.
 *
 * Examples:
 *
 * ```
 * <Box bgc="scarlet">
 * <Box bgc={{ light: "scarlet", dark: "white" }}
 * ```
 */
export type ThemeProp<Value> = Value | ThemeMap<Value>;

/**
 * A prop that represents a component slot to be rendered
 */
export type SlotType<P = Record<string, never>> = React.ComponentType<P>;

export interface StyleSystemProps {
  // Common overrides
  id?: string;
  className?: string;
  style?: CSSProperties;

  // Margin
  m?: ResponsiveProp<Spacing>;
  my?: ResponsiveProp<Spacing>;
  mx?: ResponsiveProp<Spacing>;
  mt?: ResponsiveProp<Spacing>;
  mb?: ResponsiveProp<Spacing>;
  ml?: ResponsiveProp<Spacing>;
  mr?: ResponsiveProp<Spacing>;

  // Padding
  p?: ResponsiveProp<Spacing>;
  py?: ResponsiveProp<Spacing>;
  px?: ResponsiveProp<Spacing>;
  pt?: ResponsiveProp<Spacing>;
  pb?: ResponsiveProp<Spacing>;
  pl?: ResponsiveProp<Spacing>;
  pr?: ResponsiveProp<Spacing>;

  // Width / Height
  w?: ResponsiveProp<CSSProperties['width']>;
  miw?: ResponsiveProp<CSSProperties['minWidth']>;
  maw?: ResponsiveProp<CSSProperties['maxWidth']>;
  h?: ResponsiveProp<CSSProperties['height']>;
  mih?: ResponsiveProp<CSSProperties['minHeight']>;
  mah?: ResponsiveProp<CSSProperties['maxHeight']>;

  c?: ThemeProp<Color>;
  bgc?: ThemeProp<Color>;

  // Fonts
  ff?: FontFamily;
  fs?: FontSize;
  fw?: FontWeight;

  // Layout

  /**
   * Where to place this component within a CSS Grid.
   * Must be one of the `grid-template-area` values
   * in the parent grid.
   */
  gridArea?: ResponsiveProp<string>;

  /**
   * Column span in a grid layout.
   *
   * Equivalent to CSS `grid-column: span N / span N;`
   */
  gridSpan?: ResponsiveProp<number | 'auto'>;
}

export type ForwardRefWithStaticComponents<
  Props extends Record<string, any>,
  Static extends Record<string, any>
> = ForwardRefExoticComponent<Props> & Static;
