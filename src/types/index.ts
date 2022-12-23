import type { CSSProperties, ForwardRefExoticComponent } from 'react';

export const spacing = [
  0,
  1,
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl'
  // TODO: Specials? (auto, full, etc)
] as const;

export const negativeSpacing = ['-xxs', '-xs', '-sm', '-md', '-lg', '-xl', '-xxl'] as const;

export type Spacing = typeof spacing[number] | typeof negativeSpacing[number];
export type PositiveSpacing = typeof spacing[number];

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

/**
 * A type of prop that can either be the given type OR
 * an object containing values per breakpoint.
 *
 * Example:
 *
 * <Box m="lg">
 * <Box m={{ xl: "lg", sm: "sm" xs: 0 }} />
 */
export type ResponsiveProp<Value> = Value | Partial<Record<ScreenSize, Value>>;

// export type SpacingValue = NumberSize | (string & {});

export const brandColors = [
  'scarlet',
  'grey',

  'scarlet-dark-40',
  'scarlet-dark-60'

  // and so forth
] as const;

export const systemColors = [
  'primary',
  'secondary',
  'tertiary',
  'dimmed',

  // Neutrals
  'white',
  'black',
  'neutral-0',
  'neutral-20',
  'neutral-40',
  'neutral-60',
  'neutral-80',
  'neutral-90',
  'neutral-100',

  // Utilities
  'info',
  'info-light',
  'success',
  'success-light',
  'warning',
  'warning-light',
  'error',
  'error-light',
  'focus',
  'link',
  'link-light',
  'visited',
  'visited-light'
] as const;

/**
 * Color palettes for components
 */
export type ThemeColor = typeof brandColors[number] | typeof systemColors[number];

// TODO: I want support for all the tailwind palette colors
// but without having to manually map them all...

export interface StyleSystemProps {
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

  c?: ThemeColor;

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

export interface DefaultProps<StylesNames extends string = never> extends StyleSystemProps {
  className?: string;
  style?: CSSProperties;
  // classNames?: ClassNames<StylesNames>;
}

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
