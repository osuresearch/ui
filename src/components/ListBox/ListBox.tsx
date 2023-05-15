import { Node } from '@react-types/shared';
import React, { ForwardedRef, forwardRef, useRef } from 'react';
import { AriaListBoxOptions, useListBox, useListBoxSection, useOption, useSeparator } from 'react-aria';
import { ListState } from 'react-stately';

import { cx, mergeRefs } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { StyleSystemProps } from '../../types';
import { useStyleSystemProps } from '../../hooks';

type ListItemProps<T> = StyleSystemProps & {
  state: ListState<T>;
  node: Node<T>;
};

function ListItem<T>({ node, state, ...props }: ListItemProps<T>) {
  const ref = useRef<HTMLLIElement>(null);
  const { optionProps, labelProps, descriptionProps, isSelected, isFocused, isDisabled } =
    useOption({ key: node.key }, state, ref);

  return (
    <FocusRing>
      <Box
        as="li"
        ref={ref}
        {...optionProps}
        className={cx(
          { 'rui-cursor-pointer': !isDisabled },
          { 'rui-cursor-not-allowed': isDisabled }
        )}
        c={isDisabled ? 'dark' : 'light-contrast'}
        miw={200}
        bgc={isFocused ? 'light-shade' : undefined}
        {...props}
      >
        {node.rendered}
      </Box>
    </FocusRing>
  );
}

function ListSection<T>({ node, state, ...props }: ListItemProps<T>) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: node.rendered,
    'aria-label': node['aria-label']
  });

  const { separatorProps } = useSeparator({
    elementType: 'li'
  });

  return (
    <>
      {node.key !== state.collection.getFirstKey() &&
        <li {...separatorProps} />
      }
      <li {...itemProps}>
        {node.rendered && <div {...headingProps}>{node.rendered}</div>}
        <ul {...groupProps}>
          {Array.from(node.childNodes).map((item) => (
            item.type === 'section'
              ? <ListSection<T> key={item.key} node={item} state={state} {...props} />
              : <ListItem<T> key={item.key} node={item} state={state} {...props} />
          ))}
        </ul>
      </li>
    </>
  );
}

export type ListBoxProps<T = object> = AriaListBoxOptions<T> & StyleSystemProps & {
  label: React.ReactNode;
  state: ListState<T>;

  /** Additional style system props to apply to each list item */
  itemProps?: StyleSystemProps;
};

function _ListBox<T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLElement>) {
  const boxRef = useRef<HTMLElement>(null);
  const { state } = props;

  const [styleSystemProps, ] = useStyleSystemProps(props);
  const { listBoxProps } = useListBox(props, state, boxRef);

  return (
    <FocusRing>
      <Box
        as="ul"
        ref={mergeRefs(ref, boxRef)}
        {...styleSystemProps}
        {...listBoxProps}
      >
        {Array.from(state.collection).map((item) => (
          item.type === 'section'
            ? <ListSection<T> key={item.key} node={item} state={state} {...props.itemProps} />
            : <ListItem<T> key={item.key} node={item} state={state} {...props.itemProps} />
        ))}
      </Box>
    </FocusRing>
  );
}

/**
 * Low level component for managing interactive lists of items.
 *
 * - Requires state to be passed in from React Stately's `useListState`.
 * - Section and item rendering are the responsibility of the consumer.
 *
 * @internal
 */
export const ListBox = forwardRef(_ListBox) as <T extends object>(
  props: ListBoxProps<T> & { ref?: ForwardedRef<HTMLElement> }
) => ReturnType<typeof _ListBox>;
