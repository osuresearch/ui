import { GridNode } from '@react-types/grid';
import React, { useRef } from 'react';
import { useTableHeaderRow, useTableRow } from 'react-aria';
import { TableState } from 'react-stately';

import { FocusRing } from '../FocusRing';
import { CheckboxCell, DataCell } from './Cells';
import { CheckboxColumn, DataColumn } from './Columns';

type RowProps = {
  node: GridNode<object>;
  state: TableState<object>;
};

export function HeaderRow({ node, state }: RowProps) {
  const ref = useRef<HTMLTableRowElement>(null);
  const { rowProps } = useTableHeaderRow({ node }, state, ref);

  const hasSelectableRows = state.selectionManager.selectionMode !== 'none';

  return (
    <tr ref={ref} {...rowProps}>
      {[...node.childNodes].map((column) => {
        // First column represents a checkbox for all selectable rows
        if (hasSelectableRows && column.index === 0) {
          return <CheckboxColumn key={column.key} node={column} state={state} />;
        }

        // Rest of the columns are data.
        return <DataColumn key={column.key} node={column} state={state} />;
      })}
    </tr>
  );
}

export function BodyRow({ node, state }: RowProps) {
  const ref = useRef<HTMLTableRowElement>(null);
  const { rowProps, isPressed } = useTableRow({ node }, state, ref);

  // Is the entire row selected
  // const isSelected = state.selectionManager.isSelected(node.key);
  const hasSelectableRows = state.selectionManager.selectionMode !== 'none';

  return (
    <FocusRing>
      <tr ref={ref} {...rowProps}>
        {[...node.childNodes].map((cell) => {
          // First cell represents a checkbox for selecting this row
          if (hasSelectableRows && cell.index === 0) {
            return <CheckboxCell key={cell.key} node={cell} state={state} />;
          }

          // Rest of the cells are data
          return <DataCell key={cell.key} node={cell} state={state} />;
        })}
      </tr>
    </FocusRing>
  );
}
