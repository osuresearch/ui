import { PlacementAxis } from '@react-types/overlays';
import React, { useRef } from 'react';
import { useOverlayTrigger } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import { SlotType } from '@osuresearch/ui';

import { MissingSlot } from '../MissingSlot';
import { Popover } from '../Popover';

export type CalloutSlots = {
  contentSlot?: SlotType<React.ComponentPropsWithRef<'div'>>;
};

export type CalloutProps = CalloutSlots & {
  children: React.ReactElement;

  /** Whether the overlay is open by default (controlled). */
  isOpen?: boolean;

  /** Whether the overlay is open by default (uncontrolled). */
  defaultOpen?: boolean;

  /** Handler that is called when the overlay's open state changes. */
  onOpenChange?: (isOpen: boolean) => void;

  /** Placement of the callout with respect to the trigger. */
  placement?: PlacementAxis;
};

/**
 * A callout is an overlay element positioned relative to a trigger.
 */
export const Callout = ({ children, contentSlot, ...props }: CalloutProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useOverlayTriggerState(props);

  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);

  const trigger = React.Children.only(children);

  const ContentSlot = contentSlot || MissingSlot;

  return (
    <>
      {React.cloneElement(trigger, {
        ...triggerProps,
        ref: triggerRef
      })}
      {state.isOpen && (
        <Popover overlayProps={overlayProps} triggerRef={triggerRef} state={state} {...props}>
          <ContentSlot />
        </Popover>
      )}
    </>
  );
};
