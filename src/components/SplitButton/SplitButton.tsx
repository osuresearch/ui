import React, { useRef } from 'react';
import { AriaMenuProps } from '@react-types/menu';
import { CollectionChildren } from '@react-types/shared';
import { Placement, useMenuTrigger } from 'react-aria';
import {
  MenuTriggerProps,
  useMenuTriggerState,
} from 'react-stately';

import { Button, ButtonProps } from '../Button';
import { Menu } from '../Menu';
import { Icon, IconProps } from '../Icon';
import { Group } from '../Group';
import { Divider } from '../Divider';
import { useStyleSystemProps } from '../../hooks';
import { Popover } from '../Popover';

export type SplitButtonProps<T extends object = any> = Omit<ButtonProps, 'children' | 'onPress'> &
  MenuTriggerProps &
  AriaMenuProps<T> & {
    label?: React.ReactNode;

    /** Value passed to `onAction` if the default action button is pressed */
    defaultKey?: React.Key;

    /**
     * Event handler for either the default button press or a menu item press
     *
     * @param key
     */
    onAction?: (key?: React.Key) => void;

    /** Additional props to spread into the icon */
    iconProps?: IconProps;

    /** `Item` components only */
    children: CollectionChildren<T>;
  };

export function SplitButton<T extends object = any>({
  variant,
  isDisabled,
  label,
  children,
  iconProps,
  defaultKey,
  onAction,
  ...props
}: SplitButtonProps<T>) {

  const triggerRef = useRef<HTMLDivElement>(null);
  const state = useMenuTriggerState(props);

  const [styleSystemProps] = useStyleSystemProps(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({
    ...props,
    type: 'menu',
  }, state, triggerRef);

  // Needs to be redone. The whole component needs to "own" the popup.
  // But the icon just needs to be the trigger.

  return (
    <>
      <Group ref={triggerRef} gap={0}>
        <Button
          variant={variant}
          onPress={() => onAction && onAction(defaultKey)}
          isDisabled={isDisabled}
          {...styleSystemProps}
        >
          {label}
        </Button>
        <Divider orientation="vertical" gap={0} />
        <Button
          py="xs"
          variant={variant}
          isDisabled={isDisabled}
          {...menuTriggerProps}
        >
          <Icon name="chevron"
            rotate={90}
            aria-label="More options"
            {...iconProps}
          />
        </Button>
      </Group>
      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef} placement="bottom left">
          <Menu<T> {...menuProps} {...props}>
            {children}
          </Menu>
        </Popover>
      )}
    </>
  );
}
