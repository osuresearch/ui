import { Node } from '@react-types/shared';
import React, { useRef } from 'react';
import { mergeProps, useFocusRing, useTableCell, useTableSelectionCheckbox } from 'react-aria';
import { TableState } from 'react-stately';

import { CheckboxIcon } from '../CheckboxIcon';
import { FocusRing } from '../FocusRing';
import { VisuallyHidden } from '../VisuallyHidden';

type CellProps = {
  node: Node<object>;
  state: TableState<object>;
};

export function DataCell({ node, state }: CellProps) {
  const ref = useRef<HTMLTableCellElement>(null);
  const { gridCellProps } = useTableCell({ node }, state, ref);

  return (
    <FocusRing>
      <td ref={ref} {...gridCellProps}>
        {node.rendered}
      </td>
    </FocusRing>
  );
}

export function CheckboxCell({ node, state }: CellProps) {
  const ref = useRef<HTMLTableCellElement>(null);
  const { gridCellProps } = useTableCell({ node }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox(
    {
      key: node.parentKey as React.Key
    },
    state
  );

  const { isSelected, isIndeterminate, isDisabled } = checkboxProps;
  const { focusProps, isFocusVisible } = useFocusRing(checkboxProps);

  return (
    <td ref={ref} {...gridCellProps}>
      <VisuallyHidden>
        <input {...mergeProps(checkboxProps, focusProps)} />
      </VisuallyHidden>

      <CheckboxIcon
        isSelected={isSelected}
        isIndeterminate={isIndeterminate}
        isDisabled={isDisabled}
        isFocusVisible={isFocusVisible}
      />
    </td>
  );
}
