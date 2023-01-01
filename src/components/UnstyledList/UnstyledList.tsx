import { CollectionChildren, FocusableElement, Node } from '@react-types/shared';
import React, { DOMAttributes, useRef } from 'react';
import {
  AriaCheckboxProps,
  mergeProps,
  useGridList,
  useGridListItem,
  useGridListSelectionCheckbox
} from 'react-aria';
import { ListProps, ListState, useListState } from 'react-stately';

import { SlotProp, useSlots } from '~/hooks/useSlots';
import { mergeRefs, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

export type CheckboxSlotProps = {
  /**
   * React Aria props to be used alongside `useToggleState` and `useCheckbox`
   */
  ariaCheckboxProps: AriaCheckboxProps;
};

export type RowSlotProps = DOMAttributes<FocusableElement> & {
  item: Node<object>;
  checkboxProps: AriaCheckboxProps;
};

export type UnstyledListSlots = {
  /**
   * Slot for rendering each row in the list.
   *
   * Receives props to create a checkbox associated with the cell,
   * the item node with the metadata for rendering the row, and
   * then all the React ARIA props that need to be present in the
   * returned root of the row.
   *
   * If not defined, only the content of each `<Item>` will
   * be rendered for each list item.
   */
  rowSlot?: SlotProp<RowSlotProps>;
};

export type UnstyledListProps = ListProps<any> &
  UnstyledListSlots & {
    /** Test label */
    label?: string;

    /** `Item` components only */
    children: CollectionChildren<any>;
  };

type ItemProps = UnstyledListSlots & {
  node: Node<object>;
  state: ListState<any>;
};

function DefaultRowSlot({ item, checkboxProps, ...gridCellProps }: RowSlotProps) {
  return <div {...gridCellProps}>{item.rendered}</div>;
}

function Item({ node, state, ...props }: ItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { rowProps, gridCellProps } = useGridListItem({ node }, state, ref);
  const { checkboxProps } = useGridListSelectionCheckbox({ key: node.key }, state);

  const { rowSlot: RowSlot } = useSlots(props);

  const isInteractive = state.selectionManager.selectionMode !== 'none';
  // Quick check: if it's interactive and they didn't provide a slot renderer,
  // then throw an error. Our fallback implementation doesn't support interactive mode.
  if (isInteractive && !RowSlot) {
    throw new Error(
      'You must specify a `rowSlot` when using an UnstyledList in interactive selection mode'
    );
  }

  // We assume semantic LI for all list items
  return (
    <li {...rowProps} ref={ref}>
      {RowSlot && <RowSlot item={node} checkboxProps={checkboxProps} {...gridCellProps} />}
      {!RowSlot && <DefaultRowSlot item={node} checkboxProps={checkboxProps} {...gridCellProps} />}
    </li>
  );
}

/**
 * Base polymorphic component for all components with list behaviours.
 *
 * This handles the heavy lifting of a11y compliance and interactions.
 *
 * ## Polymorphic
 *  - You can use the `as` prop to change the root element for this component.
 *  - Only polymorph to either an `ul` or `ol`, as each item will be a semantic `li`.
 *
 * ## Accessibility
 *
 * - Items follow the [ARIA grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) by ensuring that rows have a child `gridcell` element.
 *
 * ## Slots
 *
 * **Checkbox**: A slot for the rendering of a checkbox on each item when
 * the list has a `selectionMode` of `multiple` or `single`. You **MUST**
 * define a checkbox slot renderer for an interactive list, as one will not
 * be provided by default.
 */
export const UnstyledList = polymorphicForwardRef<'ul', UnstyledListProps>((props, ref) => {
  const state = useListState(props);

  const listRef = useRef<HTMLElement>(null);
  const { gridProps } = useGridList(props, state, listRef);

  return (
    <Box
      as={props.as || 'ul'}
      aria-label={props.label}
      {...mergeProps(gridProps, props as object)}
      ref={mergeRefs(listRef, ref)}
    >
      {[...state.collection].map((item) => (
        <Item key={item.key} node={item} state={state} {...props} />
      ))}
    </Box>
  );
});
