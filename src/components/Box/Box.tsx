import React, { forwardRef } from 'react';
import { cx, tc } from '../../styles';
import { DefaultProps, SpacingProp, ThemeSize } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export interface BoxProps extends DefaultProps {
  children?: React.ReactNode;
}

export function sizeValueToClass(prefix: string, size: SpacingProp<ThemeSize>, screen: ThemeSize) {
  // Use the input size matching the current screen size.
  // If it doesn't exist as a key, we use the base (if defined)
  let suffix = '__INVALID';

  if (typeof size === 'object') {
    suffix = size[screen] ?? size.base ?? suffix;
  } else {
    suffix = size;
  }

  // Handle negatives by transforming -sm to -p-sm
  if (suffix[0] === '-') {
    return `-${prefix}${suffix}`;
  }

  return `${prefix}-${suffix}`;
}

export function useMediaQuery(query: string): ThemeSize {
  return 'xxl';
}

// type PaddingProps = PropGroup<BoxPadding>;

const paddingProps = ['p', 'px', 'py', 'pl', 'pt', 'pr', 'pb'] as const;
type PaddingProp = typeof paddingProps[number];
type PaddingPropSet = Record<PaddingProp, SpacingProp<ThemeSize>>;

const marginProps = ['m', 'mx', 'my', 'ml', 'mt', 'mr', 'mb'] as const;
type MarginProp = typeof marginProps[number];
type MarginPropSet = Record<MarginProp, SpacingProp<ThemeSize>>;

export function spacingPropsToClassNames<TPropSet extends { [K: string]: SpacingProp<ThemeSize> }>(
  propNames: readonly string[],
  props: TPropSet,
  screen: ThemeSize
) {
  return Object.keys(props)
    .filter((k) => propNames.indexOf(k) >= 0)
    .map((k) => sizeValueToClass(k, props[k], screen));
}

export function useBoxModel(props: Record<string, any>) {
  const width = useMediaQuery('...'); // TODO

  // TODO: Color, w/h, miw/mih, maw/mah

  return [
    ...spacingPropsToClassNames(paddingProps, props, width),
    ...spacingPropsToClassNames(marginProps, props, width),
    tc(props.c)
  ];
}

export const _Box = forwardRef<HTMLElement, BoxProps & { component: any }>(
  ({ className, component, style, ...others }, ref) => {
    const Element = component || 'div';

    // Resolve classes from props
    const boxModelClassNames = useBoxModel(others);

    // TODO: Need to omit box model props so that they aren't
    // injected as invalid attributes into the underlying element

    return (
      <Element ref={ref} className={cx(boxModelClassNames, className)} style={style} {...others} />
    );
  }
);

/**
 * Exposes a standard set of props with any element or component.
 * Box itself does not include any styles.
 */
export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
