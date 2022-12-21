import type { CSSProperties } from 'react';

export const themeSizeNames = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  '-xs',
  '-sm',
  '-md',
  '-lg',
  '-xl',
  '-xxl',
  'base'
  // TODO: Specials? (auto, full, zero, etc)
] as const;

export type ThemeSize = typeof themeSizeNames[number];

export type Align = 'start' | 'end' | 'stretch' | 'center';

export type Justify = 'start' | 'end' | 'center' | 'apart';

// export type NumberSize = ThemeSize | number;
// export type ThemeSizes = Record<ThemeSize, number>;

// Prop that can either be a single value or an object mapping
// theme sizes to values for responsive changes
export type SpacingProp<Value> = Value | Partial<Record<ThemeSize, Value>>;

// export type SpacingValue = NumberSize | (string & {});

/**
 * Color palettes for components
 */
export type ThemeColor = 'foreground' | 'background' | 'normal' | 'dimmed' | 'scarlet';
// TODO: I want support for all the tailwind palette colors
// but without having to manually map them all...

export interface StyleSystemProps {
  // Margin
  m?: SpacingProp<ThemeSize>;
  my?: SpacingProp<ThemeSize>;
  mx?: SpacingProp<ThemeSize>;
  mt?: SpacingProp<ThemeSize>;
  mb?: SpacingProp<ThemeSize>;
  ml?: SpacingProp<ThemeSize>;
  mr?: SpacingProp<ThemeSize>;

  // Padding
  p?: SpacingProp<ThemeSize>;
  py?: SpacingProp<ThemeSize>;
  px?: SpacingProp<ThemeSize>;
  pt?: SpacingProp<ThemeSize>;
  pb?: SpacingProp<ThemeSize>;
  pl?: SpacingProp<ThemeSize>;
  pr?: SpacingProp<ThemeSize>;

  c?: ThemeColor;

  // opacity?: SystemProp<CSSProperties['opacity']>;

  // ff?: SystemProp<CSSProperties['fontFamily']>;
  fz?: SpacingProp<ThemeSize>;
  // fw?: SystemProp<CSSProperties['fontWeight']>;
  // lts?: SystemProp<CSSProperties['letterSpacing']>;
  // ta?: SystemProp<CSSProperties['textAlign']>;
  // lh?: SystemProp<CSSProperties['lineHeight']>;
  // fs?: SystemProp<CSSProperties['fontStyle']>;
  // tt?: SystemProp<CSSProperties['textTransform']>;
  // td?: SystemProp<CSSProperties['textDecoration']>;

  w?: SpacingProp<CSSProperties['width']>;
  miw?: SpacingProp<CSSProperties['minWidth']>;
  maw?: SpacingProp<CSSProperties['maxWidth']>;
  h?: SpacingProp<CSSProperties['height']>;
  mih?: SpacingProp<CSSProperties['minHeight']>;
  mah?: SpacingProp<CSSProperties['maxHeight']>;

  // bgsz?: SystemProp<CSSProperties['backgroundSize']>;
  // bgp?: SystemProp<CSSProperties['backgroundPosition']>;
  // bgr?: SystemProp<CSSProperties['backgroundRepeat']>;
  // bga?: SystemProp<CSSProperties['backgroundAttachment']>;

  // pos?: SystemProp<CSSProperties['position']>;
  // top?: SpacingProp<CSSProperties['top']>;
  // left?: SpacingProp<CSSProperties['left']>;
  // bottom?: SpacingProp<CSSProperties['bottom']>;
  // right?: SpacingProp<CSSProperties['right']>;
  // inset?: SpacingProp<CSSProperties['inset']>;

  // display?: SystemProp<CSSProperties['display']>;
}

// export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;

export interface DefaultProps<StylesNames extends string = never> extends StyleSystemProps {
  className?: string;
  style?: CSSProperties;
  // classNames?: ClassNames<StylesNames>;
}
