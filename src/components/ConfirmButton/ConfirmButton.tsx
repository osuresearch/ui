import { mergeProps } from '@react-aria/utils';
import React, { forwardRef, useRef } from 'react';
import { useOverlayTrigger } from 'react-aria';
import { OverlayTriggerProps, useOverlayTriggerState } from 'react-stately';

import { mergeRefs } from '../../utils';
import { Button, ButtonProps } from '../Button';
import { ConfirmDialog, ConfirmDialogProps } from '../ConfirmDialog';
import { Modal } from '../Modal/Modal';

export type ConfirmButtonProps = ButtonProps &
  OverlayTriggerProps &
  Omit<ConfirmDialogProps, 'children'> & {
    dialogContentSlot: React.ReactNode;
  };

/**
 * ConfirmButton documentation
 *
 * Opens a confirmation dialog that requires user action before continuing.
 * The user may always choose to cancel the action.
 *
 * ## Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const ConfirmButton = forwardRef<HTMLButtonElement, ConfirmButtonProps>(
  ({ children, ...props }, ref) => {
    const triggerRef = useRef<Element>(null);
    const state = useOverlayTriggerState(props);

    const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);

    const { dialogContentSlot, onCancel, onPrimaryAction, onSecondaryAction, ...dialogProps } =
      props;

    return (
      <>
        <Button ref={mergeRefs(ref, triggerRef)} {...mergeProps(triggerProps, props)}>
          {children}
        </Button>

        {state.isOpen && (
          <Modal state={state} isKeyboardDismissDisabled overlayProps={overlayProps} {...props}>
            <ConfirmDialog
              onPrimaryAction={() => {
                state.setOpen(false);
                onPrimaryAction();
              }}
              onSecondaryAction={() => {
                state.setOpen(false);
                onSecondaryAction && onSecondaryAction();
              }}
              onCancel={() => {
                state.setOpen(false);
                onCancel && onCancel();
              }}
              {...dialogProps}
            >
              {dialogContentSlot}
            </ConfirmDialog>
          </Modal>
        )}
      </>
    );
  }
);
