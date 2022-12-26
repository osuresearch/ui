import React, { forwardRef } from 'react';

import { useMediaQuery } from '@osuresearch/ui/hooks/useMediaQuery';
import { useTheme } from '@osuresearch/ui/hooks/useTheme';
import { Color } from '@osuresearch/ui/theme';
import { bgc, cx, ff, fs, fw, tc } from '@osuresearch/ui/theme/utils';
import {
  ColorProp,
  DefaultProps,
  ResponsiveProp,
  ScreenSize,
  Spacing,
  Theme,
  negativeSpacing,
  screenSize,
  spacing
} from '@osuresearch/ui/types';
import { createPolymorphicComponent } from '@osuresearch/ui/utils/createPolymorphicComponent';

export interface BoxProps extends DefaultProps {
  children?: React.ReactNode;
}

function isResponsiveObject<T>(value: any): value is Partial<Record<ScreenSize, T>> {
  return (
    value.xs !== undefined ||
    value.md !== undefined ||
    value.lg !== undefined ||
    value.xl !== undefined ||
    value.xxl !== undefined
  );
}

function resolveResponsiveProp<T>(prop: ResponsiveProp<T>, screen: ScreenSize): T {
  // The rough algorithm is:
  // use the closest break that is equal to or less than the input screen size.
  // If screen size is smaller than all of them, used the smallest possible.
  // { md: T1, lg: T2 }
  //  screen sizes lg, xl, xxl will use T2, size md will use T1
  //  sizes below md (sm, xs) will use T1.
  // { xs: T1, lg: T2 }
  //  screen sizes lg and lx will use T2
  //  all other sizes will use T1

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

// TODO: Template version. Can be used for justify, font size, theme size, etc.
export function spacingValueToClass(
  prefix: string,
  size: ResponsiveProp<Spacing>,
  screen: ScreenSize = 'xs'
) {
  const value = resolveResponsiveProp(size, screen) as string;

  // HACK: maw/mah need to be converted to tailwind's naming scheme
  if (prefix === 'maw') prefix = 'max-w';
  else if (prefix === 'mah') prefix = 'max-h';

  // Handle negatives by transforming -sm to -p-sm
  if (value[0] === '-') {
    return `-rui-${prefix}${value}`;
  }

  return `rui-${prefix}-${value}`;
}

// type PaddingProps = PropGroup<BoxPadding>;

const paddingProps = ['p', 'px', 'py', 'pl', 'pt', 'pr', 'pb'] as const;
type PaddingProp = typeof paddingProps[number];
type PaddingPropSet = Record<PaddingProp, ResponsiveProp<Spacing>>;

const marginProps = ['m', 'mx', 'my', 'ml', 'mt', 'mr', 'mb'] as const;
type MarginProp = typeof marginProps[number];
type MarginPropSet = Record<MarginProp, ResponsiveProp<Spacing>>;

function spacingPropsToClassNames<TPropSet extends { [K: string]: ResponsiveProp<Spacing> }>(
  propNames: readonly string[],
  props: TPropSet,
  screen: ScreenSize
) {
  return Object.keys(props)
    .filter((k) => propNames.indexOf(k) >= 0)
    .map((k) => spacingValueToClass(k, props[k], screen));
}

/**
 *
 * @param props
 * @returns An array of an array of class names and a styles object.
 */
function useBoxModel(props: Record<string, any>): [string[], object] {
  const width = useMediaQuery('...'); // TODO

  // Need to handle usage combinations of:
  //  { md: "50%", xl: "sm" }
  //  ... or not. Can just say fuck it and tell them to hardcode styles :^)

  return [
    [
      ...spacingPropsToClassNames(paddingProps, props, width),
      ...spacingPropsToClassNames(marginProps, props, width),
      ...spacingPropsToClassNames(['w', 'h', 'miw', 'mih', 'maw', 'mah'], props, width)
    ],
    // Styles that can't be resolved by spacing keys end up getting
    // resolved as inline styles.
    // TODO: This doesn't support responsive objects.
    {
      // width: !isSpacing(props.w) ? props.w : undefined,
      // height: !isSpacing(props.h) ? props.h : undefined,
      // minWidth: !isSpacing(props.miw) ? props.miw : undefined,
      // minHeight: !isSpacing(props.mih) ? props.mih : undefined,
      // maxWidth: !isSpacing(props.maw) ? props.maw : undefined,
      // maxHeight: !isSpacing(props.mah) ? props.mah : undefined,
    }
  ];
}

/**
 * Extract the current `Color` from the `ColorProp` based on
 * the current active theme.
 */
function colorPropForTheme(color: ColorProp | undefined, theme: Theme): Color | undefined {
  if (!color) {
    return;
  }

  if (typeof color === 'string') {
    return color;
  }

  if (color[theme]) {
    return color[theme];
  }

  // Fallback to the first key found. Could be a "base" or something else.
  return color[Object.keys(color)[0] as Theme];
}

function useThemeColors(props: Record<string, any>) {
  const theme = useTheme();

  return [tc(colorPropForTheme(props.c, theme)), bgc(colorPropForTheme(props.bgc, theme))];
}

function useFonts(props: Record<string, any>) {
  return [fs(props.fs), fw(props.fw), ff(props.ff)];
}

/**
 * Type check to ensure the value is a known theme spacing
 */
function isSpacing(value: any): value is Spacing {
  return (spacing as any).indexOf(value) >= 0 || (negativeSpacing as any).indexOf(value) >= 0;
}

// function resolveValueToClass(value: any, screen: ScreenSize = 'xs') {
//   if (typeof value === 'object') {
//     /* Mapping of screen size to value
//       w={{
//         xxs: "sm",
//         lg: 128,
//       }}
//     */

//     // TODO: Impl. For now, we just use the first found.
//     return resolveValueToClass(Object.values(value)[0], screen);
//   }

//   if (isSpacing(value)) {
//     return
//   }
// }

// function resolveValueToStyle(value: any, screen: ScreenSize = 'xs') {

// }

function omitDefaultProps(props: Record<string, any>): Record<string, any> {
  // @ts-ignore I know they're unused.
  const {
    // TODO: Less dumb way of doing this.
    // Should each hook return a props copy with the omissions?
    fs,
    fw,
    ff,
    c,
    bgc,
    w,
    h,
    miw,
    mih,
    maw,
    mah,
    p,
    px,
    py,
    pl,
    pt,
    pr,
    pb,
    m,
    mx,
    my,
    ml,
    mt,
    mr,
    mb,
    ...other
  } = props;

  return other;
}

export const _Box = forwardRef<HTMLElement, BoxProps & { component: any }>(
  ({ className, component, style, ...props }, ref) => {
    const Element = component || 'div';

    // Resolve classes from props
    const [boxModelClasses, boxModelStyles] = useBoxModel(props);

    const colorClassNames = useThemeColors(props);
    const fontClassNames = useFonts(props);
    // const [sizeClassNames, sizeStyles] = useSizes(props);

    // TODO: Need to omit box model props so that they aren't
    // injected as invalid attributes into the underlying element
    // (e.g. c, miw, bgc, mr, etc)

    return (
      <Element
        ref={ref}
        className={cx(boxModelClasses, fontClassNames, colorClassNames, className)}
        style={{ ...boxModelStyles, ...style }}
        {...omitDefaultProps(props)}
      />
    );
  }
);

/**
 * Exposes a standard set of props with any element or component.
 * Box itself does not include any styles.
 */
export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
