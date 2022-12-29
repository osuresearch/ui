import { CollectionChildren, FocusableElement, Node } from '@react-types/shared';
import React, { DOMAttributes, useRef } from 'react';
import {
  AriaCheckboxProps,
  mergeProps,
  useCheckbox,
  useGridList,
  useGridListItem,
  useGridListSelectionCheckbox
} from 'react-aria';
import { ListProps, ListState, ToggleProps, useListState, useToggleState } from 'react-stately';

import { useStyleSystem } from '@osuresearch/ui/hooks/useStyleSystem';
import { StyleSystemProps } from '@osuresearch/ui/types';
import { mergeRefs, polymorphicForwardRef } from '@osuresearch/ui/utils';

import { SlotProp, useSlots } from '../../hooks/useSlots';
import { AltBox } from '../AltBox';

/**
 * @private
 */
function Checkbox({ children, ...props }: ToggleProps) {
  const ref = useRef<HTMLInputElement>(null);
  const state = useToggleState(props);
  const { inputProps } = useCheckbox(props, state, ref);

  return <input {...inputProps} ref={ref} />;
}

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
   * Slot for rendering a checkbox that updates along with the item state
   */
  checkboxSlot?: SlotProp<CheckboxSlotProps>;

  /**
   * Slot for rendering each row in the list.
   *
   * Receives props to create a checkbox associated with the cell,
   * the item node with the metadata for rendering the row, and
   * then all the React ARIA props that need to be present in the
   * returned root of the row.
   */
  rowSlot?: SlotProp<RowSlotProps>;
};

export type UnstyledListProps = ListProps<any> &
  UnstyledListSlots & {
    /** Test label */
    label?: string;
  };

type ItemProps = UnstyledListSlots & {
  node: Node<object>;
  state: ListState<any>;
};

function Item({ node, state, ...props }: ItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { rowProps, gridCellProps } = useGridListItem({ node }, state, ref);
  const { checkboxProps } = useGridListSelectionCheckbox({ key: node.key }, state);

  const { checkboxSlot: CheckboxSlot, rowSlot: RowSlot } = useSlots(props);

  const showCheckbox = state.selectionManager.selectionMode !== 'none';

  // We assume semantic LI for all list items
  return (
    <li {...rowProps} ref={ref}>
      {RowSlot && <RowSlot item={node} checkboxProps={checkboxProps} {...gridCellProps} />}

      {!RowSlot && (
        <div {...gridCellProps}>
          {showCheckbox && CheckboxSlot && <CheckboxSlot ariaCheckboxProps={checkboxProps} />}
          {node.rendered}
        </div>
      )}
    </li>
  );
}

/**
 * Base polymorphic component for all components with list behaviours.
 *
 * This handles the heavy lifting of a11y compliance and interactions.
 *
 * ## Polymorphic Component
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
 * the list has a `selectionMode` of `multiple` or `single`.
 */
export const UnstyledList = polymorphicForwardRef<UnstyledListProps>(({ as, ...props }, ref) => {
  const state = useListState({
    ...props,
    selectionMode: 'multiple'
  });

  const listRef = useRef<HTMLElement>(null);
  const { gridProps } = useGridList(props, state, listRef);

  const { styleSystemProps, otherProps } = useStyleSystem(props);

  const Component = as || 'ul';

  return (
    <Component
      aria-label={props.label}
      {...mergeProps(styleSystemProps, otherProps, gridProps)}
      ref={mergeRefs(listRef, ref)}
    >
      {[...state.collection].map((item) => (
        <Item key={item.key} node={item} state={state} {...props} />
      ))}
    </Component>
  );
});
