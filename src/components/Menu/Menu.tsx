import React, { useRef } from 'react';
import { Node } from '@react-types/shared';
import { AriaMenuOptions, useMenu, useMenuItem, useMenuSection, useSeparator } from 'react-aria';
import {
  TreeProps,
  TreeState,
  useTreeState
} from 'react-stately';

import { cx } from '../../utils';
import { Box } from '../Box';
import { CheckboxIcon } from '../CheckboxIcon';
import { FocusRing } from '../FocusRing';
import { Group } from '../Group';
import { Divider } from '../Divider';
import { Text } from '../Text';

export type MenuProps<T> = TreeProps<T> & AriaMenuOptions<T>;

export type MenuItemProps<T> = {
  state: TreeState<T>;
  node: Node<T>;
};

export function MenuItem<T>({ node, state }: MenuItemProps<T>) {
  const ref = useRef<HTMLLIElement>(null);
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: node.key },
    state,
    ref
  );

  const isSelectable = state.selectionManager.selectionMode !== 'none';

  return (
    <Box
      as="li"
      ref={ref}
      {...menuItemProps}
      className={cx(
        // Disable default focus behaviour: focused elements get a bgc
        'outline-none',

        { 'cursor-pointer': !isDisabled },
        { 'cursor-not-allowed': isDisabled }
      )}
      c={isDisabled ? 'neutral-subtle' : 'neutral'}
      px="sm"
      py="xxs"
      miw={200}
      bgc={isFocused ? 'interactive-subtle-hover' : undefined}
    >
      <Group>
        {isSelectable && <CheckboxIcon isSelected={isSelected} />}
        {node.rendered}
      </Group>
    </Box>
  );
}

export function MenuSection<T>(props: MenuItemProps<T>) {
  const { node, state } = props;
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: node.rendered,
    'aria-label': node['aria-label']
  });

  const { separatorProps } = useSeparator({
    elementType: 'li'
  });

  return (
    <>
      {node.key !== state.collection.getFirstKey() &&
        <Divider gap="xxs" {...separatorProps} />
      }
      <li {...itemProps}>
        {node.rendered &&
          <Text fs="sm" px="sm" c="neutral-subtle" {...headingProps}>
            {node.rendered}
          </Text>
        }
        <ul {...groupProps}>
          {Array.from(node.childNodes).map((item) => (
            item.type === 'section'
              ? <MenuSection<T> {...props} key={item.key} node={item} state={state} />
              : <MenuItem<T> {...props} key={item.key} node={item} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

/**
 * @internal
 */
export function Menu<T extends object>(props: MenuProps<T>) {
  const state = useTreeState<T>(props);
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu<T>(props, state, ref);

  return (
    <FocusRing>
      <Box as="ul" ref={ref} py="xs" {...menuProps}>
        {Array.from(state.collection).map((item) => {
          if (item.type === 'section') {
            return <MenuSection key={item.key} node={item} state={state} />
          }

          return (
            <MenuItem
              key={item.key}
              node={item}
              state={state}
            />
          );
        })}
      </Box>
    </FocusRing>
  );
}
