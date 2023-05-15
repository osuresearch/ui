import React from 'react';

import { useScreenSize } from '../../hooks/useScreenSize';
import { ResponsiveProp, Spacing, StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type GridProps = StyleSystemProps & {
  /** Template areas.
   *
   * Children that support `StyleSystemProps` can use
   * the `gridArea` prop to specify a target.
   *
   * See `grid-template-areas` on [MDN](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas)
   */
  areas?: ResponsiveProp<string[]>;

  /** Size per row in CSS units */
  rows?: ResponsiveProp<(string | number)[]>;

  /** Size per column in CSS units */
  columns?: ResponsiveProp<(string | number)[]>;

  /** The space between columns */
  columnGap?: ResponsiveProp<Spacing>;

  /** The space between rows */
  rowGap?: ResponsiveProp<Spacing>;

  /**
   * The space between both rows and columns. Will override both `rowGap` and `columnGap`.
   */
  gap?: ResponsiveProp<Spacing>;

  /** Content */
  children?: React.ReactNode;
};

function toSpacingToken(space: Spacing): string {
  return `var(--rui-spacing-${space})`;
}

/**
 * Layout children in two dimensions with [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).
 *
 * The `areas` prop is used to layout a typical application with an explicit header,
 * sidebar, content area, and footer with ratios specified by the `columns` and `rows`
 * props.
 *
 * ## Accessibility
 *
 * Use the `as` prop for polymorphic children to ensure the appropriate semantic
 * elements are used when a grid represents an application layout.
 */
export function Grid({ children, ...props }: GridProps) {
  const { className, style, areas, rows, columns, columnGap, rowGap, gap, ...styleSystemProps } =
    props;
  const { resolve } = useScreenSize();

  return (
    <Box
      as="div"
      className={cx('grid', className)}
      // Grid system props get baked right into style
      style={{
        gridTemplateAreas: `"${(resolve(areas) ?? []).join('" "')}"`,
        gridTemplateColumns: (resolve(columns) ?? []).join(' '),
        gridTemplateRows: (resolve(rows) ?? []).join(' '),
        columnGap: toSpacingToken(resolve(gap ? gap : columnGap) || 0),
        rowGap: toSpacingToken(resolve(gap ? gap : rowGap) || 0),
        ...(style ? style : {})
      }}
      {...styleSystemProps}
    >
      {children}
    </Box>
  );
}
