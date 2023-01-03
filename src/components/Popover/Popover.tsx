import { mergeProps } from '@react-aria/utils';
import { FocusableElement } from '@react-types/shared';
import React, { useRef } from 'react';
import { FocusScope, Overlay, usePopover } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

import { Icon } from '../Icon';
import { Paper } from '../Paper';
import { Underlay } from '../Underlay';
import { VisuallyHidden } from '../VisuallyHidden';

export type PopoverProps = {
  state: OverlayTriggerState;
  offset?: number;
  children: React.ReactNode;
  triggerRef: React.RefObject<Element>;
  overlayProps: React.DOMAttributes<FocusableElement>;
};

/**
 * 🛑 Internal component. Do not use directly.
 *
 * @internal
 */
export function Popover({ children, state, offset = 8, overlayProps, ...props }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef
    },
    state
  );

  const iconProps = {
    style: {}
  };

  // TODO: Figure out focus handling for this.
  // Should we focus something specific? Should it be
  // configurable by the developer? Etc.
  return (
    <Overlay {...overlayProps}>
      <Underlay {...underlayProps} />
      <Paper {...popoverProps} ref={popoverRef} shadow="md" p="md" withBorder>
        <svg {...arrowProps} className="rui-arrow" data-placement={placement}>
          <path d="M0 0,L6 6,L12 0" />
        </svg>
        <FocusScope contain restoreFocus autoFocus>
          {/* <Icon
            name="caret"
            className="rui-arrow"
            data-placement={placement}
            {...mergeProps(arrowProps, iconProps)}
          /> */}

          <VisuallyHidden>
            <button aria-label="Close" onClick={state.close} />
          </VisuallyHidden>

          {children}

          <VisuallyHidden>
            <button aria-label="Close" onClick={state.close} />
          </VisuallyHidden>
        </FocusScope>
      </Paper>
    </Overlay>
  );
}
