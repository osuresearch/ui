import React, { useRef } from 'react';
import { AriaMenuProps } from '@react-types/menu';
import { CollectionChildren } from '@react-types/shared';
import { Placement, useMenuTrigger } from 'react-aria';
import {
  MenuTriggerProps,
  useMenuTriggerState,
} from 'react-stately';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { StyleSystemProps } from '../../types';
import { useStyleSystemProps } from '../../hooks';
import { Menu } from '../Menu';

export type MenuButtonProps<T extends object = any> = StyleSystemProps &
  MenuTriggerProps &
  AriaMenuProps<T> & {
    label?: React.ReactNode;

    isDisabled?: boolean;

    /**
     * Custom trigger element.
     *
     * If omitted, a button with the chevron icon will be used.
     */
    renderTrigger?: React.ReactElement;

    /**
     * Placement of the popover with respect to its anchor.
     *
     * Defaults to `bottom left`.
     */
    placement?: Placement;

    /** `Item` components only */
    children: CollectionChildren<T>;
  };

/**
 * A menu button displays a list of actions or options that a user can choose.
 */
export function MenuButton<T extends object = any>({
  children,
  label,
  renderTrigger,
  placement = 'bottom left',
  ...props
}: MenuButtonProps<T>) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useMenuTriggerState(props);

  const [styleSystemProps] = useStyleSystemProps(props);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(props, state, triggerRef);

  return (
    <>
      {renderTrigger
        ? React.cloneElement(renderTrigger, {
          ...menuTriggerProps,
          ref: triggerRef
        })
        : <Button ref={triggerRef}
          aria-label={props['aria-label']}
          isDisabled={props.isDisabled}
          renderRight={<Icon name="chevron" rotate={90} />}
          {...menuTriggerProps}
          {...styleSystemProps}
        >
          {label}
        </Button>
      }
      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef} placement={placement}>
          <Menu<T> {...menuProps} {...props}>
            {children}
          </Menu>
        </Popover>
      )}
    </>
  );
}
