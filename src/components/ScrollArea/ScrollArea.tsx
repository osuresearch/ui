import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import React, { forwardRef, useRef, useState } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { useScreenSize } from '../../hooks';

export type ScrollAreaProps = StyleSystemProps & {
  /**
   * Describes the nature of scrollbar visibility
   *
   * - `auto`: scrollbars are visible when content is overflowing on the corresponding orientation.
   * - `always`: scrollbars are always visible regardless of whether the content is overflowing.
   * - `scroll`: scrollbars are visible when the user is scrolling along its corresponding orientation.
   * - `hover`: when the user is scrolling along its corresponding orientation and when the user
   *  is hovering over the scroll area.
   */
  type?: 'auto' | 'always' | 'scroll' | 'hover';

  /**
   * If type is set to either `scroll` or `hover`, this prop determines the length
   * of time, in milliseconds, before the scrollbars are hidden after the user
   * stops interacting with scrollbars.
   */
  hideDelay?: number;

  children: React.ReactNode;
};

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 *
 * ## Accessibility
 * - Scrolling via keyboard is supported by default because the component
 *  relies on the browser's native scroll behaviour.
 *
 */
export function ScrollArea({
  type = 'hover',
  hideDelay = 1000,
  mah,
  maw,
  children,
  ...styleSystemProps
}: ScrollAreaProps) {
  const className = {
    viewport: 'w-full h-full',
    scrollbar: cx(
      'flex select-none touch-none',
      'bg-light opacity-100',

      // Scrollbar width/height
      'data-[orientation=vertical]:w-xs',
      'data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-xs',

      // Hover transitions
      'transition duration-[150ms] ease-out',
      'hover:bg-light-shade',
      'data-[state=hidden]:opacity-0'
    ),
    thumb: cx(
      'flex-1 bg-dimmed relative',
      "before:content-[''] before:absolute before:top-1/2 before:left-1/2",
      'before:-translate-x-1/2 before:-translate-y-1/2',
      'before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]'
    ),
    // Corner is only visible when we have both scrollbars active.
    // I don't really need to show the corner, scrollbars are small enough.
    corner: 'opacity-0'
  };

  const viewportRef = useRef<HTMLDivElement>(null);
  const { resolve } = useScreenSize();

  return (
    <Box {...styleSystemProps}>
      <RadixScrollArea.Root
        type={type}
        scrollHideDelay={hideDelay}
        asChild
      >
        <Box pr="xs" pb="xs" className="overflow-hidden">
          <RadixScrollArea.Viewport
            ref={viewportRef}
            className={className.viewport}
            style={{
              // For a scroll area, we use mah/maw for the viewport dimensions.
              maxHeight: resolve(mah),
              maxWidth: resolve(maw),
            }}
          >
            {children}
          </RadixScrollArea.Viewport>

          <RadixScrollArea.Scrollbar
            className={className.scrollbar}
            orientation="vertical"
            forceMount
          >
            <RadixScrollArea.Thumb className={className.thumb} />
          </RadixScrollArea.Scrollbar>

          <RadixScrollArea.Scrollbar
            className={className.scrollbar}
            orientation="horizontal"
            forceMount
          >
            <RadixScrollArea.Thumb className={className.thumb} />
          </RadixScrollArea.Scrollbar>

          <RadixScrollArea.Corner className={className.corner} />
        </Box>
      </RadixScrollArea.Root>
    </Box>
  );
}
