import { PlacementAxis } from '@react-types/overlays';
import { FocusableElement } from '@react-types/shared';
import React, { ReactNode, useRef } from 'react';
import { AriaTooltipProps, mergeProps, useTooltip, useTooltipTrigger } from 'react-aria';
import { TooltipTriggerState, useTooltipTriggerState } from 'react-stately';

import { Paper } from '../Paper';

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
};

type TooltipPopupProps = AriaTooltipProps & {
  state: TooltipTriggerState;
  children?: ReactNode;
};

function TooltipPopup({ state, ...props }: TooltipPopupProps) {
  const { tooltipProps } = useTooltip(props, state);

  return (
    <Paper
      shadow="xs"
      fs="sm"
      w="max-content"
      p="xxs"
      withBorder
      {...mergeProps(props, tooltipProps, {
        style: {
          position: 'absolute',
          maxWidth: '15rem'
        }
      })}
    >
      {props.children}
    </Paper>
  );
}

/**
 * A tooltip is an overlay description positioned relative to a trigger.
 */
export const Tooltip = ({ children, contentSlot, delay = 800, ...props }: TooltipProps) => {
  const triggerRef = useRef<FocusableElement>(null);

  const config = { ...props, delay };

  const state = useTooltipTriggerState(config);

  const { triggerProps, tooltipProps } = useTooltipTrigger(config, state, triggerRef);

  const trigger = React.Children.only(children);
  return (
    <span className="rui-relative">
      {React.cloneElement(trigger, {
        ...triggerProps,
        ref: triggerRef
      })}
      {state.isOpen && (
        <TooltipPopup state={state} {...tooltipProps}>
          {contentSlot}
        </TooltipPopup>
      )}
    </span>
  );
};
