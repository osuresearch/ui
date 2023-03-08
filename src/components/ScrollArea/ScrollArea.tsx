import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import React, { forwardRef, useRef, useState } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

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
  type: 'auto' | 'always' | 'scroll' | 'hover';

  /**
   * If type is set to either `scroll` or `hover`, this prop determines the length
   * of time, in milliseconds, before the scrollbars are hidden after the user
   * stops interacting with scrollbars.
   */
  hideDelay: number;

  children: React.ReactNode;
};

/**
 * Augments native scroll functionality for custom, cross-browser styling
 *
 * ## Accessibility
 * - Scrolling via keyboard is supported by default because the component
 *  relies on the browser's native scroll behaviour.
 *
 */
export function ScrollArea({
  type = 'hover',
  hideDelay = 1000,
  children,
  ...styleSystemProps
}: ScrollAreaProps) {
  const className = {
    viewport: 'rui-w-full rui-h-full',
    scrollbar: cx(
      'rui-flex rui-select-none rui-touch-none',
      'rui-bg-light rui-opacity-100',

      // Scrollbar width/height
      'data-[orientation=vertical]:rui-w-xs',
      'data-[orientation=horizontal]:rui-flex-col data-[orientation=horizontal]:rui-h-xs',

      // Hover transitions
      'rui-transition rui-duration-[150ms] rui-ease-out',
      'hover:rui-bg-light-shade',
      'data-[state=hidden]:rui-opacity-0'
    ),
    thumb: cx(
      'rui-flex-1 rui-bg-dimmed rui-relative',
      "before:content-[''] before:rui-absolute before:rui-top-1/2 before:rui-left-1/2",
      'before:-rui-translate-x-1/2 before:-rui-translate-y-1/2',
      'before:rui-w-full before:rui-h-full before:rui-min-w-[44px] before:rui-min-h-[44px]'
    ),
    // Corner is only visible when we have both scrollbars active.
    // I don't really need to show the corner, scrollbars are small enough.
    corner: 'rui-opacity-0'
  };

  const viewportRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom] = useState(false);

  const onScroll = () => {
    if (viewportRef.current) {
      const el = viewportRef.current;
      const bottom = el.scrollTop === el.scrollHeight - el.offsetHeight;

      if (atBottom !== bottom) {
        setAtBottom(bottom);
      }
    }
  };

  return (
    <RadixScrollArea.Root
      type={type}
      scrollHideDelay={hideDelay}
      asChild
      className="rui-overflow-hidden"
    >
      <Box {...styleSystemProps} pr="xs" pb="xs">
        <RadixScrollArea.Viewport
          ref={viewportRef}
          className={className.viewport}
          style={
            {
              // TODO: Don't do this lol. I'm just playing with the UX a bit.
              // Having the overflow mask fade out the closer we get to the
              // bottom would be nice - with complete transparency @ bottom.
              '--mask': atBottom
                ? `
              rgba(0,0,0, 1)
            `
                : `linear-gradient(to bottom,
                rgba(0,0,0, 1) 0,   rgba(0,0,0, 1) 80%,
                rgba(0,0,0, 0) 100%, rgba(0,0,0, 0) 0
            ) 100% 50% / 100% 100% repeat-x
            `,
              'mask': 'var(--mask)'
            } as React.CSSProperties
          }
          onScroll={onScroll}
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
  );
}
