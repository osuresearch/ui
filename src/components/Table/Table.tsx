import React, { forwardRef, useRef } from 'react';
import { useTable, useTableRowGroup } from 'react-aria';
import { CellProps, ColumnProps, RowProps, TableBodyProps, TableHeaderProps, TableStateProps, useTableState, TableHeader as StatelyTableHeader, TableBody as StatelyTableBody, Column as StatelyColumn, Row as StatelyRow, Cell as StatelyCell } from 'react-stately';

import { useStyleSystemProps } from '../../hooks/useStyleSystemProps';
import { StyleSystemProps } from '../../types';
import { cx, mergeRefs } from '../../utils';
import { Box } from '../Box';
import { BodyRow, HeaderRow } from './Rows';

/**
 * A TableHeader is a container for the Column elements in a Table. Columns can be statically defined
 * as children, or generated dynamically using a function based on the data passed to the `columns` prop.
 */
export const TableHeader: <T>(props: TableHeaderProps<T>) => JSX.Element = StatelyTableHeader;

/**
 * A TableBody is a container for the Row elements of a Table. Rows can be statically defined
 * as children, or generated dynamically using a function based on the data passed to the `items` prop.
 */
export const TableBody: <T>(props: TableBodyProps<T>) => JSX.Element = StatelyTableBody;

/**
 * A Column represents a field of each item within a Table. Columns may also contain nested
 * Column elements to represent column groups. Nested columns can be statically defined as
 * children, or dynamically generated using a function based on the `childColumns` prop.
 */
export const Column: <T>(props: ColumnProps<T>) => JSX.Element = StatelyColumn;

/**
 * A Row represents a single item in a Table and contains Cell elements for each column.
 * Cells can be statically defined as children, or generated dynamically using a function
 * based on the columns defined in the TableHeader.
 */
export const Row: (props: RowProps) => JSX.Element = StatelyRow;

/**
 * A Cell represents the value of a single Column within a Table Row.
 */
export const Cell: (props: CellProps) => JSX.Element = StatelyCell;

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
 * ## Accessibility
 * - Exposed to assistive technology as a `grid` using ARIA
 * - Keyboard navigation between columns, rows, cells, and in-cell focusable elements via the arrow keys
 * - Single, multiple, or no row selection via mouse, touch, or keyboard interactions
 * - Ensures that selections are announced using an ARIA live region
 *
 * <!-- @ruiStatus Development -->
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'default', striped = false, ...props }, ref) => {
    const tableRef = useRef<HTMLTableElement>(null);

    const state = useTableState({
      ...props,
      // We expose our own checkboxes
      showSelectionCheckboxes: false
    });

    const { collection } = state;
    const { gridProps } = useTable(props, state, tableRef);

    const { rowGroupProps: headProps } = useTableRowGroup();
    const { rowGroupProps: bodyProps } = useTableRowGroup();

    const [styleSystemProps] = useStyleSystemProps(props);

    return (
      <Box
        as="table"
        ref={mergeRefs(ref, tableRef)}
        w="100%"
        c="neutral"
        fs={variant === 'compact' ? 'sm' : 'base'}
        className={cx(
          // <th> styles
          '[&_th]:text-left',
          '[&_th]:border-b-2 [&_th]:border-b-surface-bold',

          // <th scope="row">
          '[&_th[scope="row"]]:border-b-0',
          '[&_th[scope="row"]]:border-r-2 [&_th[scope="row"]]:border-r-dark',

          // <tr> styles
          '[&_tr]:border-b-2 [&_tr]:border-b-surface-subtle',

          {
            // <tr> for striped rows
            '[&_tr:nth-child(2n)]:bg-light': striped,

            // `default` variant
            '[&_th]:py-xs [&_th]:px-md': variant === 'default',
            '[&_td]:p-md': variant === 'default',

            // `compact` variant
            '[&_th]:p-xs': variant == 'compact',
            '[&_td]:p-xs': variant == 'compact'
          },

          // User-supplied styles
          className
        )}
        {...gridProps}
        {...styleSystemProps}
      >
        <thead {...headProps}>
          {collection.headerRows.map((header) => (
            <HeaderRow key={header.key} node={header} state={state} />
          ))}
        </thead>
        <tbody {...bodyProps}>
          {Array.from(collection.body.childNodes).map((row) => (
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
