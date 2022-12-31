import type { CSSProperties, ForwardRefExoticComponent } from 'react';

import { Color } from '../theme';

export const spacing = [0, 1, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'auto', 'full'] as const;
export type PositiveSpacing = typeof spacing[number];

export const negativeSpacing = ['-xxs', '-xs', '-sm', '-md', '-lg', '-xl', '-xxl'] as const;
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

export const screenSize = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
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

export type FontPropName = typeof fontProps[number];
export type ColorPropName = typeof colorProps[number];
export type SizePropName = typeof sizeProps[number];
export type PaddingPropName = typeof paddingProps[number];
export type MarginPropName = typeof marginProps[number];

export const styleSystemPropNames = [
  ...fontProps,
  ...colorProps,
  ...sizeProps,
  ...paddingProps,
  ...marginProps
] as const;

export type StyleSystemPropName = typeof styleSystemPropNames[number];

/**
 * A type of prop that can either be the given type OR
 * an object containing values per breakpoint.
 *
 * Examples:
 *
 * ```
 * <Box m="lg">
 * <Box m={{ xl: "lg", sm: "sm" xs: 0 }}>
 * ```
 */
export type ResponsiveProp<Value> = Value | Partial<Record<ScreenSize, Value>>;

/**
 * A type of prop that can either be the given color OR
 * an object defining the color per theme.
 *
 * Examples:
 *
 * ```
 * <Box bgc="scarlet">
 * <Box bgc={{ light: "scarlet", dark: "white" }}
 * ```
 */
export type ColorProp = Color | Partial<Record<Theme, Color>>;

// export type SpacingValue = NumberSize | (string & {});

// TODO: I want support for all the tailwind palette colors
// but without having to manually map them all...

/**
 * Object that maps values to responsive breakpoints
 */
export type ResponsiveMap<T> = Record<ScreenSize, T>;

/**
 * Object that maps values to themes
 */
export type ThemeMap<T> = Record<Theme, T>;

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
  w?: ResponsiveProp<Spacing>; // | CSSProperties['width']>;
  miw?: ResponsiveProp<Spacing>; // | CSSProperties['minWidth']>;
  maw?: ResponsiveProp<Spacing>; // | CSSProperties['maxWidth']>;
  h?: ResponsiveProp<Spacing>; // | CSSProperties['height']>;
  mih?: ResponsiveProp<Spacing>; // | CSSProperties['minHeight']>;
  mah?: ResponsiveProp<Spacing>; // | CSSProperties['maxHeight']>;

  c?: ColorProp;
  bgc?: ColorProp;

  // Fonts
  ff?: FontFamily;
  fs?: FontSize;
  fw?: FontWeight;

  // opacity?: SystemProp<CSSProperties['opacity']>;

  // ff?: SystemProp<CSSProperties['fontFamily']>;
  // fz?: ResponsiveProp<ThemeSize>;
  // fw?: SystemProp<CSSProperties['fontWeight']>;
  // lts?: SystemProp<CSSProperties['letterSpacing']>;
  // ta?: SystemProp<CSSProperties['textAlign']>;
  // lh?: SystemProp<CSSProperties['lineHeight']>;
  // fs?: SystemProp<CSSProperties['fontStyle']>;
  // tt?: SystemProp<CSSProperties['textTransform']>;
  // td?: SystemProp<CSSProperties['textDecoration']>;

  // bgsz?: SystemProp<CSSProperties['backgroundSize']>;
  // bgp?: SystemProp<CSSProperties['backgroundPosition']>;
  // bgr?: SystemProp<CSSProperties['backgroundRepeat']>;
  // bga?: SystemProp<CSSProperties['backgroundAttachment']>;

  // pos?: SystemProp<CSSProperties['position']>;
  // top?: ResponsiveProp<CSSProperties['top']>;
  // left?: ResponsiveProp<CSSProperties['left']>;
  // bottom?: ResponsiveProp<CSSProperties['bottom']>;
  // right?: ResponsiveProp<CSSProperties['right']>;
  // inset?: ResponsiveProp<CSSProperties['inset']>;

  // display?: SystemProp<CSSProperties['display']>;
}

// export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;

/**
 * Component props that define both an implementation of the Style System
 *
 * @deprecated - Replace with StyleSystemProps
 */
export type DefaultProps = StyleSystemProps;

/**
 * Wrap a component to support a polymorphic DOM element
 *
 * @author Mantine.dev <https://github.com/mantinedev/mantine>
 */
export type xForwardRefWithStaticComponents<
  Props extends Record<string, any>,
  Static extends Record<string, any>
> = ((props: Props) => React.ReactElement) & Static;

export type ForwardRefWithStaticComponents<
  Props extends Record<string, any>,
  Static extends Record<string, any>
> = ForwardRefExoticComponent<Props> & Static;
