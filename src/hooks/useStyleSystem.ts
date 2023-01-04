import { CSSProperties } from 'react';

import { bgc, ff, fs, fw, tc } from '~/theme';
import { colorProps, fontProps, layoutProps, marginProps, paddingProps, sizeProps } from '~/types';
import { spacingPropsToClassNames, splitProps } from '~/utils';

import { useScreenSize } from './useScreenSize';
import { useTheme } from './useTheme';

/**
 * Convert style system props into classNames and styles
 */
export function useStyleSystem<P>(props: P): [string[], CSSProperties, P] {
  const { current, resolve } = useScreenSize();
  const { resolve: resolveTheme } = useTheme();

  // TODO: Condense into one vararg call so we don't have all these temp objects.
  const [padding, _1] = splitProps(paddingProps, props as { [K: string]: any });
  const [margin, _2] = splitProps(marginProps, _1);
  const [size, _3] = splitProps(sizeProps, _2);
  const [font, _4] = splitProps(fontProps, _3);
  const [color, _5] = splitProps(colorProps, _4);
  const [layout, _6] = splitProps(layoutProps, _5);
  const { style, ...unused } = _6;

  const gridArea = resolve(layout.gridArea);
  const gridSpan = resolve(layout.gridSpan);

  const layoutStyles: CSSProperties = {};
  if (gridArea) {
    layoutStyles.gridArea = gridArea;
  } else if (gridSpan) {
    layoutStyles.gridColumn = `span ${gridSpan} / span ${gridSpan}`;
  }

  return [
    // Construct an array of Tailwind class names
    // resolved from the style system props
    [
      ...spacingPropsToClassNames(paddingProps, padding, current),
      ...spacingPropsToClassNames(marginProps, margin, current),
      // ...spacingPropsToClassNames(sizeProps, size, screen),

      tc(resolveTheme(color.c)),
      bgc(resolveTheme(color.bgc)),

      fs(font.fs),
      fw(font.fw),
      ff(font.ff)
    ],

    // Styles that can't be resolved by spacing keys end up getting
    // resolved as an inline style.
    {
      width: resolve(size.w),
      height: resolve(size.h),
      minWidth: resolve(size.miw),
      minHeight: resolve(size.mih),
      maxWidth: resolve(size.maw),
      maxHeight: resolve(size.mah),

      ...layoutStyles,

      ...(style ? style : {})
    },

    unused as P
  ];
}
