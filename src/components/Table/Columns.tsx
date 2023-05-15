import { Node } from '@react-types/shared';
import React, { useRef } from 'react';
import {
  mergeProps,
  useFocusRing,
  useTableColumnHeader,
  useTableSelectAllCheckbox
} from 'react-aria';
import { TableState } from 'react-stately';

import { cx } from '../../utils';
import { CheckboxIcon } from '../CheckboxIcon';
import { FocusRing } from '../FocusRing';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

type ColumnProps = {
  node: Node<object>;
  state: TableState<object>;
};

export function DataColumn({ node, state }: ColumnProps) {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node }, state, ref);

  const isSortedOn = state.sortDescriptor?.column === node.key;
  const sortable = !!node.props.allowsSorting;

  return (
    <FocusRing>
      <th
        ref={ref}
        {...columnHeaderProps}
        className={cx({
          'cursor-pointer': sortable
        })}
      >
        {node.rendered}
        {isSortedOn && state.sortDescriptor?.direction === 'ascending' && (
          <Icon ml="xs" name="sortUp" />
        )}
        {isSortedOn && state.sortDescriptor?.direction === 'descending' && (
          <Icon ml="xs" name="sortDown" />
        )}
        {!isSortedOn && sortable && (
          // Placeholder when there's no icon to prevent content shift
          <Icon ml="xs" name="blank" />
        )}
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
