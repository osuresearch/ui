import { FocusableElement } from '@react-types/shared';
import { Placement } from '@react-types/overlays';
import React, { ReactNode, useRef } from 'react';
import { AriaTooltipProps, useOverlayPosition, useTooltip, useTooltipTrigger } from 'react-aria';
import { TooltipTriggerState, useTooltipTriggerState } from 'react-stately';

import { Paper } from '../Paper';
import { FocusRing } from '../FocusRing';
import { Arrow } from '../Arrow';

export type TooltipSlots = {
  contentSlot: React.ReactNode;
};

export type TooltipProps = TooltipSlots & {
  children: React.ReactElement;

  /** Whether the overlay is open by default (controlled). */
  isOpen?: boolean;

  /** Whether the overlay is open by default (uncontrolled). */
  defaultOpen?: boolean;

  /** Handler that is called when the overlay's open state changes. */
  onOpenChange?: (isOpen: boolean) => void;

  /** The delay time for the tooltip to show up. */
  delay?: number;

  /** Whether the tooltip should be disabled, independent from the trigger. */
  isDisabled?: boolean;

  /**
   * Placement of the tooltip with respect to the trigger.
   * If omitted, the tooltip will make a best-effort placement.
   */
  placement?: Placement;

  /**
   * Pixel-based offset from the trigger element to display the popover.
   */
  offset?: number;
};

type TooltipPopupProps = AriaTooltipProps & {
  state: TooltipTriggerState;
  children?: ReactNode;
};

function TooltipPopup({ state, ...props }: TooltipPopupProps) {
  const { tooltipProps } = useTooltip(props, state);

  return (
    <Paper
      bgc="black"
      c="white"
      shadow="xs"
      fs="sm"
      w="max-content"
      maw="15rem"
      py="xxs"
      px="xs"
      {...tooltipProps}
    >
      {props.children}
    </Paper>
  );
}

/**
 * A tooltip is an overlay description positioned relative to a trigger.
 *
 * ## Accessibility
 * -  `aria-describedby` is applied to the trigger element when a tooltip is visible.
 * -  The element wrapped by a Tooltip will receive tab index of 0 to ensure that
 *    non-focusable elements can receive keyboard focus (e.g. icons).
 */
export const Tooltip = ({ children, contentSlot, delay = 800, ...props }: TooltipProps) => {
  const targetRef = useRef<FocusableElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const config = { ...props, delay };

  const state = useTooltipTriggerState(config);
  const { triggerProps, tooltipProps } = useTooltipTrigger(config, state, targetRef);

  const { overlayProps, arrowProps, placement } = useOverlayPosition({
    ...props,
    targetRef,
    overlayRef,
    isOpen: state.isOpen,
    shouldFlip: true,
    offset: 4,
  });

  const trigger = React.Children.only(children);
  return (
    <>
    <FocusRing>
      {React.cloneElement(trigger, {
        ...triggerProps,
        tabIndex: 0,
        ref: targetRef
      })}
    </FocusRing>
    {state.isOpen && (
      <div ref={overlayRef} {...overlayProps} className="relative">
        <Arrow c="black" size={4} placement={placement} {...arrowProps} />
        <TooltipPopup state={state} {...tooltipProps}>
          {contentSlot}
        </TooltipPopup>
      </div>
    )}
    </>
  );
};
