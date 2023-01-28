import { AriaMenuProps } from '@react-types/menu';
import { CollectionChildren, Node } from '@react-types/shared';
import React, { useRef } from 'react';
import { AriaMenuOptions, useMenu, useMenuItem, useMenuTrigger } from 'react-aria';
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

export type MenuProps = MenuTriggerProps &
  AriaMenuProps<any> & {
    label: React.ReactNode;

    /** `Item` components only */
    children: CollectionChildren<any>;
  };

type TreeItemProps = {
  state: TreeState<object>;
  node: Node<object>;

  onAction?: (key: React.Key) => void;
  onClose?: () => void;
};

function TreeItem({ node, state, onAction, onClose }: TreeItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: node.key, onAction, onClose },
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
        'rui-outline-none',

        { 'rui-cursor-pointer': !isDisabled },
        { 'rui-cursor-not-allowed': isDisabled }
      )}
      c={isDisabled ? 'dark' : 'light-contrast'}
      px="sm"
      py="xxs"
      miw={200}
      bgc={isFocused ? 'light' : undefined}
    >
      <Group>
        {isSelectable && <CheckboxIcon isSelected={isSelected} />}
        {node.rendered}
      </Group>
    </Box>
  );
}

type MenuImplProps = TreeProps<any> & AriaMenuOptions<any>;

function MenuImpl(props: MenuImplProps) {
  const state = useTreeState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <FocusRing>
      <Box as="ul" ref={ref} {...menuProps}>
        {Array.from(state.collection).map((item) => {
          if (item.type === 'section') {
            return <div key={item.key}>TODO: Section support</div>;
          }

          return (
            <TreeItem
              key={item.key}
              node={item}
              state={state}
              onAction={props.onAction}
              onClose={props.onClose}
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
export const Menu = ({ children, label, ...props }: MenuProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useMenuTriggerState(props);

  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, triggerRef);

  return (
    <>
      <Button ref={triggerRef} {...menuTriggerProps} rightSlot={<Icon name="caret" />}>
        {label}
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef} placement="bottom left">
          <MenuImpl {...menuProps} {...props}>
            {children}
          </MenuImpl>
        </Popover>
      )}
    </>
  );
};
