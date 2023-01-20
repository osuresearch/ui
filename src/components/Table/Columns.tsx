import { Node } from '@react-types/shared';
import React, { useRef } from 'react';
import {
  mergeProps,
  useFocusRing,
  useTableColumnHeader,
  useTableSelectAllCheckbox
} from 'react-aria';
import { TableState } from 'react-stately';

import { CheckboxField } from '../CheckboxField';
import { CheckboxIcon } from '../CheckboxIcon';
import { FocusRing } from '../FocusRing';
import { VisuallyHidden } from '../VisuallyHidden';

type ColumnProps = {
  node: Node<object>;
  state: TableState<object>;
};

export function DataColumn({ node, state }: ColumnProps) {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node }, state, ref);

  const isSortedOn = state.sortDescriptor?.column === node.key;
  const sortable = node.props.allowsSorting; // TODO: Is custom prop, untyped
  const sortIcon = state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼';

  return (
    <FocusRing>
      <th ref={ref} {...columnHeaderProps}>
        {node.rendered}
        {sortable && isSortedOn && { sortIcon }}
      </th>
    </FocusRing>
  );
}

export function CheckboxColumn({ node, state }: ColumnProps) {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node }, state, ref);

  const { checkboxProps } = useTableSelectAllCheckbox(state);

  const isMultipleSelection = state.selectionManager.selectionMode === 'multiple';

  const { isSelected, isIndeterminate, isDisabled } = checkboxProps;
  const { focusProps, isFocusVisible } = useFocusRing(checkboxProps);

  return (
    <FocusRing>
      <th ref={ref} {...columnHeaderProps}>
        <VisuallyHidden>
          <input {...mergeProps(checkboxProps, focusProps)} />
        </VisuallyHidden>

        {isMultipleSelection && (
          <CheckboxIcon
            isSelected={isSelected}
            isIndeterminate={isIndeterminate}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
          />
        )}
      </th>
    </FocusRing>
  );
}
