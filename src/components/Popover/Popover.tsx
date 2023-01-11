import { mergeProps } from '@react-aria/utils';
import { Placement, PlacementAxis } from '@react-types/overlays';
import { FocusableElement } from '@react-types/shared';
import React, { useRef } from 'react';
import { FocusScope, Overlay, usePopover } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

import { Color, ThemeProp } from '~/types';

import { Arrow } from '../Arrow';
import { Paper } from '../Paper';
import { Underlay } from '../Underlay';

export type PopoverProps = {
  /**
   * Background color for the popover and arrow.
   *
   * Use `<Text>` and similar containers to drive foreground color.
   */
  bgc?: ThemeProp<Color>;

  /**
   * React Aria trigger state
   */
  state: OverlayTriggerState;

  /**
   * Pixel-based offset from the trigger element to display the popover.
   */
  offset?: number;

  children: React.ReactNode;

  /**
   * Ref to the element that triggered the popover.
   *
   * Required for returning keyboard focus to the trigger
   * once the popover is closed.
   */
  triggerRef: React.RefObject<Element>;

  /**
   * Props to spread into React Aria `<Overlay>`
   */
  overlayProps?: React.DOMAttributes<FocusableElement>;

  /**
   * Placement of the element with respect to its anchor.
   *
   * Defaults to `bottom`.
   */
  placement?: Placement;
};

/**
 * 🛑 Internal component. Do not use directly.
 *
 * ## Accessibility
 * - Applies React Aria `Overlay` and RUI's `Underlay` to block touch input outside of the paper
 * - Wraps content with React Aria's `FocusScope` to force keyboard focus to only cycle through
 *  components contained within the paper.
 * - Keyboard focus is returned to the popover trigger once closed.
 *
 * @internal
 */
export function Popover({
  children,
  state,
  bgc = 'light-tint',
  offset = 0,
  overlayProps = {},
  ...props
}: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef
    },
    state
  );

  return (
    <Overlay {...overlayProps}>
      <Underlay {...underlayProps} />
      <Paper bgc={bgc} {...popoverProps} ref={popoverRef} shadow="md" withBorder>
        <Arrow c={bgc} {...arrowProps} placement={placement} />
        <FocusScope contain restoreFocus autoFocus>
          {children}
        </FocusScope>
      </Paper>
    </Overlay>
  );
}
