import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type TrackProps = StyleSystemProps & {
  children?: React.ReactNode;
  isDisabled: boolean;
};

/**
 * Controlled slot renderer for a slider track.
 *
 * @internal
 */
export const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ className, children, ...props }, ref) => (
    <Box
      as="div"
      ref={ref}
      className={cx(
        // Track line as a :before element
        'before:content-[attr(x)] before:h-4 before:w-full before:absolute',

        'before:bg-primary',

        // if horizontal
        'h-32 w-full',
        'before:h-4 before:top-[50%] before:translate-y-[-50%]',

        // TODO: Vert.
        // :before has a width of 4, height of 100%, left 50%, translateX(-50%)
        // track has a width of 32px and a height of 100%

        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
