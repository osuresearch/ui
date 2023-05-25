import { AriaMenuProps } from '@react-types/menu';
import { CollectionChildren, Node } from '@react-types/shared';
import React, { useRef } from 'react';
import { AriaMenuOptions, useMenu, useMenuItem, useMenuSection, useMenuTrigger, useSeparator } from 'react-aria';
import {
  MenuTriggerProps,
  TreeProps,
  TreeState,
  useMenuTriggerState,
  useTreeState
} from 'react-stately';

import { cx } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { CheckboxIcon } from '../CheckboxIcon';
import { FocusRing } from '../FocusRing';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Divider } from '../Divider';
import { Text } from '../Text';

export type MenuProps<T extends object = any> = MenuTriggerProps &
  AriaMenuProps<T> & {
    label: React.ReactNode;

    isDisabled?: boolean;

    /** `Item` components only */
    children: CollectionChildren<T>;
  };

type MenuItemProps<T> = {
  state: TreeState<T>;
  node: Node<T>;
};

function MenuItem<T>({ node, state }: MenuItemProps<T>) {
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

type MenuImplProps<T> = TreeProps<T> & AriaMenuOptions<T>;

function MenuSection<T>(props: MenuItemProps<T>) {
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

function MenuImpl<T extends object>(props: MenuImplProps<T>) {
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

/**
 * A menu displays a list of actions or options that a user can choose.
 */
export function Menu<T extends object = any>({ children, label, ...props }: MenuProps<T>) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useMenuTriggerState(props);

  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(props, state, triggerRef);

  return (
    <>
      <Button ref={triggerRef}
        isDisabled={props.isDisabled}
        rightSlot={<Icon name="chevron" rotate={90} />}
        {...menuTriggerProps}
      >
        {label}
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef} placement="bottom left">
          <MenuImpl<T> {...menuProps} {...props}>
            {children}
          </MenuImpl>
        </Popover>
      )}
    </>
  );
}
