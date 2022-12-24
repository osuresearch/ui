import React, { forwardRef } from 'react';
import { bgc, cx, ff, fs, fw, tc } from '@osuresearch/ui/theme/utils';
import {
  DefaultProps,
  ScreenSize,
  Spacing,
  ResponsiveProp,
  ThemeSize
} from '@osuresearch/ui/types';
import { createPolymorphicComponent } from '@osuresearch/ui/utils/createPolymorphicComponent';

export interface BoxProps extends DefaultProps {
  children?: React.ReactNode;
}

// TODO: Template version. Can be used for justify, font size, theme size, etc.
export function spacingValueToClass(
  prefix: string,
  size: ResponsiveProp<Spacing>,
  screen: ScreenSize = 'xs'
) {
  // Use the input size matching the current screen size.
  // If it doesn't exist as a key, we use the base (if defined)
  let suffix = '__INVALID';

  if (typeof size === 'object') {
    suffix = '' + (size[screen] ?? size.md ?? suffix);
  } else {
    suffix = '' + size;
  }

  // Handle negatives by transforming -sm to -p-sm
  if (suffix[0] === '-') {
    return `-${prefix}${suffix}`;
  }

  return `${prefix}-${suffix}`;
}

export function useMediaQuery(query: string): ScreenSize {
  return 'xxl';
}

// type PaddingProps = PropGroup<BoxPadding>;

const paddingProps = ['p', 'px', 'py', 'pl', 'pt', 'pr', 'pb'] as const;
type PaddingProp = typeof paddingProps[number];
type PaddingPropSet = Record<PaddingProp, ResponsiveProp<Spacing>>;

const marginProps = ['m', 'mx', 'my', 'ml', 'mt', 'mr', 'mb'] as const;
type MarginProp = typeof marginProps[number];
type MarginPropSet = Record<MarginProp, ResponsiveProp<Spacing>>;

export function spacingPropsToClassNames<TPropSet extends { [K: string]: ResponsiveProp<Spacing> }>(
  propNames: readonly string[],
  props: TPropSet,
  screen: ScreenSize
) {
  return Object.keys(props)
    .filter((k) => propNames.indexOf(k) >= 0)
    .map((k) => spacingValueToClass(k, props[k], screen));
}

export function useBoxModel(props: Record<string, any>) {
  const width = useMediaQuery('...'); // TODO

  // TODO: w/h, miw/mih, maw/mah

  return [
    ...spacingPropsToClassNames(paddingProps, props, width),
    ...spacingPropsToClassNames(marginProps, props, width)
  ];
}

export function fontPropsToClasses(props: Record<string, any>) {
  return [fs(props.fs), fw(props.fw), ff(props.ff)];
}

export function colorPropsToClasses(props: Record<string, any>) {
  return [tc(props.c), bgc(props.bgc)];
}

export const _Box = forwardRef<HTMLElement, BoxProps & { component: any }>(
  ({ className, component, style, ...others }, ref) => {
    const Element = component || 'div';

    // Resolve classes from props
    const boxModelClassNames = useBoxModel(others);
    const fontClassNames = fontPropsToClasses(others);
    const colorClassNames = colorPropsToClasses(others);

    // TODO: Need to omit box model props so that they aren't
    // injected as invalid attributes into the underlying element

    // TODO: Need to support box model responsive
    // transitions for w/miw/maw/etc below.

    const { w, miw, maw, h, mih, mah, ...props } = others;

    return (
      <Element
        ref={ref}
        className={cx(boxModelClassNames, fontClassNames, colorClassNames, className)}
        style={{
          // TODO: Don't use style props here if we don't have to
          width: w,
          height: h,
          minWidth: miw,
          maxWidth: maw,
          minHeight: mih,
          maxHeight: mah
        }}
        {...props}
      />
    );
  }
);

/**
 * Exposes a standard set of props with any element or component.
 * Box itself does not include any styles.
 */
export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
