import { Placement } from '@react-types/overlays';
import { DOMAttributes, FocusableElement } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { FocusScope, Overlay, usePopover } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

import { Color } from '../../theme';
import { ThemeProp } from '../../types';
import { mergeRefs } from '../../utils';
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
  overlayProps?: DOMAttributes<FocusableElement>;

  /**
   * Placement of the element with respect to its anchor.
   *
   * Defaults to `bottom`.
   */
  placement?: Placement;

  /**
   * Toggle the arrow linking popover to trigger.
   *
   * @default false
   */
  withArrow?: boolean;
};

/**
 * Extension of tooltips that can include interactive content. Positioning
 * is relative to the trigger element, unlike Modals.
 *
 * ## Accessibility
 * - Applies React Aria `Overlay` and RUI's `Underlay` to block touch input outside of the paper
 * - Wraps content with React Aria's `FocusScope` to force keyboard focus to only cycle through
 *  components contained within the paper.
 * - Keyboard focus is returned to the popover trigger once closed.
 *
 * @internal
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      state,
      bgc = 'surface',
      offset = 0,
      withArrow = false,
      overlayProps = {},
      ...props
    },
    ref
  ) => {
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
        <Paper bgc={bgc} {...popoverProps} ref={mergeRefs(ref, popoverRef)} shadow="md" withBorder>
          {withArrow && <Arrow c={bgc} {...arrowProps} placement={placement} />}
          <FocusScope contain restoreFocus autoFocus>
            {children}
          </FocusScope>
        </Paper>
      </Overlay>
    );
  }
);
