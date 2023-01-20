import React, { forwardRef, useRef } from 'react';
import { useTable, useTableRowGroup } from 'react-aria';
import { TableStateProps, useTableState } from 'react-stately';

import { StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { BodyRow, HeaderRow } from './Rows';

export type TableProps = StyleSystemProps &
  TableStateProps<object> & {
    variant?: 'default' | 'compact';

    striped?: boolean;

    caption?: string;

    children?: React.ReactNode;
  };

/**
 * A table displays data in rows and columns and enables a user to navigate
 * its contents via directional navigation keys, and optionally supports
 * row selection and sorting.
 *
 * ## 🛑 Warning
 *
 * Interactive tables are not a complete feature and are not recommended for use
 * at this time.
 *
 * ## Accessibility
 * - Exposed to assistive technology as a `grid` using ARIA
 * - Keyboard navigation between columns, rows, cells, and in-cell focusable elements via the arrow keys
 * - Single, multiple, or no row selection via mouse, touch, or keyboard interactions
 * - Ensures that selections are announced using an ARIA live region
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'default', striped = false, ...props }, ref) => {
    const tableRef = useRef<HTMLTableElement>(null);

    // const { selectionMode, selectionBehavior } = props;
    const state = useTableState({
      ...props,
      showSelectionCheckboxes: false // selectionMode === 'multiple' && selectionBehavior !== 'replace',
    });

    const { collection } = state;
    const { gridProps } = useTable(props, state, tableRef);

    const { rowGroupProps: headProps } = useTableRowGroup();
    const { rowGroupProps: bodyProps } = useTableRowGroup();

    return (
      <Box
        as="table"
        ref={mergeRefs(ref, tableRef)}
        w="100%"
        c="light-contrast"
        fs={variant === 'compact' ? 'sm' : 'base'}
        className={cx(
          // <th> styles
          '[&_th]:rui-text-left',
          '[&_th]:rui-border-b-2 [&_th]:rui-border-b-dark',

          // <th scope="row">
          '[&_th[scope="row"]]:rui-border-b-0',
          '[&_th[scope="row"]]:rui-border-r-2 [&_th[scope="row"]]:rui-border-r-dark',

          // <tr> styles
          '[&_tr]:rui-border-b-2 [&_tr]:rui-border-b-light-shade',

          {
            // <tr> for striped rows
            '[&_tr:nth-child(2n)]:rui-bg-light': striped,

            // `default` variant
            '[&_th]:rui-py-xs [&_th]:rui-px-md': variant === 'default',
            '[&_td]:rui-p-md': variant === 'default',

            // `compact` variant
            '[&_th]:rui-p-xs': variant == 'compact',
            '[&_td]:rui-p-xs': variant == 'compact'
          },

          // User-supplied styles
          className
        )}
        {...gridProps}
      >
        <thead {...headProps}>
          {collection.headerRows.map((header) => (
            <HeaderRow key={header.key} node={header} state={state} />
          ))}
        </thead>
        <tbody {...bodyProps}>
          {[...collection.body.childNodes].map((row) => (
            <BodyRow key={row.key} node={row} state={state} />
          ))}
        </tbody>
        {/*
          Note that React Aria does not explicitly support table footers.
          They might just lump it into headerRows though, not sure.
        */}
      </Box>
    );
  }
);
