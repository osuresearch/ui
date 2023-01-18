import React, { useRef } from "react";
import { Node } from '@react-types/shared';
import { useOption, AriaListBoxOptions, useListBox } from "react-aria";
import { ListState } from "react-stately";
import { cx } from "~/utils";
import { Box } from "../Box";
import { FocusRing } from "../FocusRing";

type ListItemProps<T> = {
  state: ListState<T>
  node: Node<T>;
};

function ListItem<T>({ node, state }: ListItemProps<T>) {
  const ref = useRef<HTMLLIElement>(null);
  const { 
    optionProps, 
    labelProps, 
    descriptionProps, 
    isSelected, 
    isFocused, 
    isDisabled 
  } = useOption(
    { key: node.key },
    state,
    ref
  );

  return (
    <Box
      as="li"
      ref={ref}
      {...optionProps}
      className={cx(
        // Disable default focus behaviour: focused elements get a bgc
        'rui-outline-none',

        { 'rui-cursor-pointer': !isDisabled },
        { 'rui-cursor-not-allowed': isDisabled }
      )}
      c={isDisabled ? 'dark' : 'light-contrast'}
      px="sm"
      py="xxs"
      miw={200}
      bgc={isFocused ? 'light' : (isSelected ? 'light-shade' : undefined)}
    >
      {node.rendered}
    </Box>
  );
}

export type ListBoxProps<T = object> = AriaListBoxOptions<T> & {
  state: ListState<T>
}

/**
 * Low level component for managing interactive lists of items.
 * 
 * ## 🛑 Internal use only
 *  
 * 
 * <!-- @ruiInternal -->
 * 
 * @internal
 */
export function ListBox<T>(props: ListBoxProps<T>) {
  const ref = useRef<HTMLUListElement>(null);
  const { state } = props;

  const { listBoxProps } = useListBox(props, state, ref);

  return (
    <FocusRing>
      <Box as="ul" ref={ref} {...listBoxProps}>
        {[...state.collection].map((item) => 
          <ListItem<T>
            key={item.key}
            node={item}
            state={state}
          />
        )}
      </Box>
    </FocusRing>
  );
}
